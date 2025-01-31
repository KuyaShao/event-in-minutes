import { d as defineEventHandler } from '../../../_/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const prisma = new PrismaClient();
const _id_ = defineEventHandler(async (event) => {
  const { id } = event.context.params;
  return await prisma.post.findUnique({
    where: {
      id: Number(id)
    },
    include: {
      author: true,
      category: true
    }
  });
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
