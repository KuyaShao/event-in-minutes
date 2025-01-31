import { d as defineEventHandler } from '../../_/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const prisma = new PrismaClient();
const article_get = defineEventHandler(async () => {
  const posts = await prisma.post.findMany({
    where: {
      isFeatured: false
    },
    include: {
      author: true,
      category: true
    }
  });
  return posts;
});

export { article_get as default };
//# sourceMappingURL=article.get.mjs.map
