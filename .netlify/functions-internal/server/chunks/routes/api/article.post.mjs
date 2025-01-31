import { d as defineEventHandler, r as readBody, a as getCookie, c as createError } from '../../_/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:url';
import 'ipx';
import 'node:fs';
import 'node:path';

const prisma = new PrismaClient();
const article_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const cookie = getCookie(event, "auth");
  const user = cookie ? JSON.parse(cookie) : null;
  if (!user || user.role !== "admin") {
    throw createError({
      statusCode: 403,
      statusMessage: "Forbidden"
    });
  }
  const { title, content, img, category } = body;
  if (!title || !img || !category) {
    throw createError({
      statusCode: 400,
      statusMessage: "Title, image, and category are required."
    });
  }
  try {
    let categoryRecord = await prisma.category.findUnique({
      where: {
        title: category
      }
    });
    if (!categoryRecord) {
      categoryRecord = await prisma.category.create({
        data: { title: category }
      });
    }
    const post = await prisma.post.create({
      data: {
        title,
        content,
        img,
        published: true,
        isFeatured: false,
        date: /* @__PURE__ */ new Date(),
        author: { connect: { id: user.id } },
        // Ensure user.id is defined
        category: { connect: { id: categoryRecord.id } }
      }
    });
    return post;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error"
    });
  }
});

export { article_post as default };
//# sourceMappingURL=article.post.mjs.map
