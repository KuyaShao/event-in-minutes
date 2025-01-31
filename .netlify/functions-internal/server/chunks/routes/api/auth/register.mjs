import { d as defineEventHandler, r as readBody } from '../../../_/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const prisma = new PrismaClient();
const register = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password, name } = body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name
    }
  });
  return user;
});

export { register as default };
//# sourceMappingURL=register.mjs.map
