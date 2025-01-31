import { d as defineEventHandler } from '../../_/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const prisma = new PrismaClient();
const featured_get = defineEventHandler(async () => {
  return await prisma.post.findFirst({
    where: {
      isFeatured: true
    },
    include: {
      author: true,
      category: true
    }
  });
});

export { featured_get as default };
//# sourceMappingURL=featured.get.mjs.map
