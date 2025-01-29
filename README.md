# Nuxt 3 with Prisma and MySQL

This project integrates **Nuxt 3** with **Prisma** and **MySQL** for building a server-side rendered (SSR) application. It fetches posts and other data from a MySQL database using Prisma ORM and serves it via API routes.

## Features

- Server-side rendering (SSR) and Static Site Generation (SSG) with Nuxt 3.
- MySQL database integration via Prisma.
- Dynamic content served from a MySQL database.
- API routes for handling database queries and operations.

## Tech Stack

- **Nuxt 3**: Framework for building modern web applications with SSR and SSG.
- **Prisma ORM**: An easy-to-use and type-safe database client for querying MySQL.
- **MySQL**: The relational database for storing and querying data.
- **Netlify**: Platform for deploying Nuxt 3 applications.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or above)
- **npm**, **yarn**, **pnpm**, or **bun** (your preferred package manager)
- **MySQL** (or a MySQL service like PlanetScale, Railway, etc.)

---

## Setup Instructions

### 1. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone <your-repository-url>
cd <your-project-directory>

### 2. Install Dependencies
### Install the necessary dependencies for the project using your preferred package manager:

# Using npm
npm install

# Using pnpm
pnpm install

# Using yarn
yarn install

# Using bun
bun install

### 3. Configure Prisma for MySQL
### Update your Prisma schema and .env file to use MySQL.

### Update schema.prisma for MySQL
### In prisma/schema.prisma, ensure you have the following configuration for MySQL:

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"  // Use MySQL as the database provider
  url      = env("DATABASE_URL")  // The MySQL connection URL
}

model User {
  id       Int      @id @default(autoincrement())
  email    String   @unique
  name     String?
  password String
  role     String   @default("user")
  posts    Post[]
}

model Post {
  id         Int       @id @default(autoincrement())
  title      String
  content    String?
  published  Boolean   @default(false)
  author     User      @relation(fields: [authorId], references: [id])
  img        String
  authorId   Int
  date       DateTime
  isFeatured Boolean   @default(false)
  category   Category  @relation(fields: [categoryId], references: [id])
  categoryId Int
}

model Category {
  id    Int     @id @default(autoincrement())
  title String  @unique
  posts Post[]  @relation
}


## Update .env File
## In your .env file, configure the DATABASE_URL for your MySQL database:
DATABASE_URL="mysql://username:password@localhost:3306/database_name"

## 4. Clear Old Migrations (If Necessary)
## If you're switching from SQLite or starting fresh, you may need to clear any previous migrations. Delete the migration folder:
rm -rf prisma/migrations

## 5. Create New Migrations
## After clearing old migrations, generate a new migration for MySQL:

npx prisma migrate dev --name init  # Create and apply the migration to MySQL

### This will set up the necessary tables in your MySQL database.


### Running the Application Locally
### To start the development server locally:


# Using npm
npm run dev

# Using pnpm
pnpm dev

# Using yarn
yarn dev

# Using bun
bun run dev
### The app should now be available at http://localhost:3000.

```
