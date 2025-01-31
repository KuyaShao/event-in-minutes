import { d as defineEventHandler, r as readBody, c as createError, s as setCookie } from '../../../_/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const prisma = new PrismaClient();
const login = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  event.res.setHeader("X-Content-Options", "nosniff");
  const user = await prisma.user.findUnique({
    where: { email }
  });
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid email or password"
    });
  }
  const authData = JSON.stringify({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role
  });
  setCookie(event, "auth", authData);
  return {
    email: user.email,
    name: user.name,
    role: user.role
  };
});

export { login as default };
//# sourceMappingURL=login.mjs.map
