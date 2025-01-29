import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  return await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      author: true,
      category: true,
    },
  });
});
