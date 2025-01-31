import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  event.res.setHeader("X-Content-Options", "nosniff");

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

  setCookie(event, "auth", authData);

  return {
    email: user.email,
    name: user.name,
    role: user.role,
  };
});
