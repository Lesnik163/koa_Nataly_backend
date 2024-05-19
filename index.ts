import Koa from "koa";
const cors = require('@koa/cors');
import koaBody from "koa-body";
import { router } from "./router/photo";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

async function main() {
  const app = new Koa();
  app.listen(3001, () => {
    console.log("http://localhost:3001");
  });

  app.use(koaBody());
  app.use(cors());
  app.use(router.routes());
  app.use(router.allowedMethods);

  await prisma.$connect();
}

main()
.then(async () => {
  await prisma.$disconnect();
})
.catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
})