import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  return await prisma.post.findFirst({
    where: {
      isFeatured: true,
    },
    include: {
      author: true,
      category: true,
    },
  });
});
