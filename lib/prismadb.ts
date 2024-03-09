import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  if (globalThis.prisma) {
    console.warn("PrismaClient is already defined on the global object");
  }
  globalThis.prisma = prismadb;
}

export default prismadb;
