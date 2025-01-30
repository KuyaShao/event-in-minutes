import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (process.client) return;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid email or password",
    });
  }

  const authData = JSON.stringify({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  });

  setCookie(event, "auth", authData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  const cookieValue = getCookie(event, "auth");

  return {
    email: user.email,
    name: user.name,
    role: user.role,
  };
});
