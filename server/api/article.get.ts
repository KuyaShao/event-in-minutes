import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const posts = await prisma.post.findMany({
    where: {
      isFeatured: false,
    },
    include: {
      author: true,
      category: true,
    },
  });

  const transformedPosts = posts.map((post) => ({
    ...post,
    content: post.content === null ? undefined : post.content,
  }));

  return transformedPosts;
});
