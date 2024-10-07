import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Order } from '@gstore/core';

@Controller('order')
export class OrderController {
  constructor(private readonly repo: OrderRepository) {}

  @Post()
  async create(@Body() order: Order) {
    return this.repo.create(order);
  }

  @Get()
  async findAllOrders() {
    return this.repo.findAll();
  }

  @Get(':id')
  async findOrderById(@Param('id') id: string) {
    return this.repo.findById(+id);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    return this.repo.delete(+id);
  }
}
