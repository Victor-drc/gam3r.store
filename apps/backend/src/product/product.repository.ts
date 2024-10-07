import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { Product } from '@gstore/core';

@Injectable()
export class ProductRepository {
  constructor(readonly prisma: PrismaProvider) {}

  async create(product: Product): Promise<void> {
    await this.prisma.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    });
  }

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products as any;
  }

  async findById(id: number): Promise<Product | null> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    return (product as any) ?? null;
  }

  async delete(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
