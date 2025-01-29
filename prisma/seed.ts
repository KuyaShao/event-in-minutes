import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Seed data for User model
  const hashedPassword = await bcrypt.hash("password123", 10);

  const adminUser = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin User",
      password: hashedPassword,
      role: "admin",
    },
  });

  const regularUser = await prisma.user.create({
    data: {
      email: "user@example.com",
      name: "Regular User",
      password: hashedPassword,
      role: "user",
    },
  });

  // Seed data for Category model
  const techCategory = await prisma.category.create({
    data: {
      title: "Tech",
    },
  });

  const lifestyleCategory = await prisma.category.create({
    data: {
      title: "Lifestyle",
    },
  });

  // Seed data for Post model
  await prisma.post.create({
    data: {
      title: "First Tech Post",
      content: "This is a tech post content.",
      published: true,
      author: {
        connect: { id: adminUser.id },
      },
      img: "/image/featured/featured-img1.png",
      date: new Date(),
      isFeatured: true,
      category: {
        connect: { id: techCategory.id },
      },
    },
  });

  await prisma.post.create({
    data: {
      title: "Lifestyle Tips",
      content: "This is a lifestyle post content.",
      published: true,
      author: {
        connect: { id: regularUser.id },
      },
      img: "/image/articles/article-img1.png",
      date: new Date(),
      isFeatured: false,
      category: {
        connect: { id: lifestyleCategory.id },
      },
    },
  });

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
