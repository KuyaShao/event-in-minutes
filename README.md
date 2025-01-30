# Nuxt 3 with Prisma and POSTGRESQL

This project integrates **Nuxt 3** with **Prisma** and **POSTGRESQL** for building a server-side rendered (SSR) application. It fetches posts and other data from a POSTGRESQL database using Prisma ORM and serves it via API routes.

## Features

- Server-side rendering (SSR) and Static Site Generation (SSG) with Nuxt 3.
- POSTGRESQL database integration via Prisma.
- Dynamic content served from a POSTGRESQL database.
- API routes for handling database queries and operations.

## Tech Stack

- **Nuxt 3**: Framework for building modern web applications with SSR and SSG.
- **Prisma ORM**: An easy-to-use and type-safe database client for querying POSTGRESQL.
- **POSTGRESQL**: The relational database for storing and querying data.
- **Netlify**: Platform for deploying Nuxt 3 applications.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or above)
- **npm**, **yarn**, **pnpm**, or **bun** (your preferred package manager)
- **POSTGRESQL** (or a POSTGRESQL service like supabase, etc.)

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

### 3. Configure Prisma for POSTGRESQL
### Update your Prisma schema and .env file to use POSTGRESQL.

### Update schema.prisma for POSTGRESQL
### In prisma/schema.prisma, ensure you have the following configuration for POSTGRESQL:

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "POSTGRESQL"  // Use POSTGRESQL as the database provider
  url      = env("DATABASE_URL")  // The POSTGRESQL connection URL
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
## In your .env file, configure the DATABASE_URL for your POSTGRESQL database:
DATABASE_URL="postgresql://username:password@localhost:PortNumber/database_name"

## 4. Clear Old Migrations (If Necessary)
## If you're switching from SQLite or starting fresh, you may need to clear any previous migrations. Delete the migration folder:
rm -rf prisma/migrations

## 5. Create New Migrations
## After clearing old migrations, generate a new migration for POSTGRESQL:

npx prisma migrate dev --name init  # Create and apply the migration to POSTGRESQL

### This will set up the necessary tables in your POSTGRESQL database.


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
