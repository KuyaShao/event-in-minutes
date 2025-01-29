import fs from "fs-extra";
import path from "path";

// Set up paths for the prisma folder and dist folder
const prismaFolder = path.join(__dirname, "../prisma");
const distFolder = path.join(__dirname, "../.output");

// Ensure the dist folder exists
fs.ensureDirSync(distFolder);

// Copy the database file into the dist folder
fs.copySync(path.join(prismaFolder, "dev.db"), path.join(distFolder, "dev.db"));

console.log("Database copied to dist folder.");
