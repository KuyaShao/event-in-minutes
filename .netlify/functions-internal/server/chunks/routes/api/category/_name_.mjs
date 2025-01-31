import { d as defineEventHandler, c as createError } from '../../../_/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const prisma = new PrismaClient();
const _name_ = defineEventHandler(async (event) => {
  const { name } = event.context.params;
  const category = await prisma.category.findUnique({
    where: {
      title: name
      // Query by category title
    },
    include: {
      posts: {
        select: {
          id: true,
          title: true,
          content: true,
          img: true,
          date: true,
          isFeatured: true
        }
      }
    }
  });
  if (!category) {
    throw createError({
      statusCode: 404,
      statusMessage: "Category not found"
    });
  }
  return category;
});

export { _name_ as default };
//# sourceMappingURL=_name_.mjs.map
