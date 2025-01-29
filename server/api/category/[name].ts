import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { name } = event.context.params;

  // Fetch the category along with related posts
  const category = await prisma.category.findUnique({
    where: {
      title: name, // Query by category title
    },
    include: {
      posts: {
        select: {
          id: true,
          title: true,
          content: true,
          img: true,
          date: true,
          isFeatured: true,
        },
      },
    },
  });

  if (!category) {
    throw createError({
      statusCode: 404,
      statusMessage: "Category not found",
    });
  }

  // Return category data along with posts
  return category;
});
