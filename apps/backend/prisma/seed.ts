//Irá fazer a importação dos dados de produtos para a tabela de produtos do BD
import products from '@gstore/core/src/constants/products';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  await prisma.product.createMany({
    data: products.map((p) => ({ ...p, id: undefined })),
  });
}

seed();
