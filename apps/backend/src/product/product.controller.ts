import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product } from '@gstore/core';

@Controller('product')
export class ProductController {
  constructor(private readonly repo: ProductRepository) {}

  @Post()
  createProduct(@Body() product: Product): Promise<void> {
    return this.repo.create(product);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.repo.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Product> {
    return this.repo.findById(+id);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<void> {
    return this.repo.delete(+id);
  }
}
