import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';
import { Order } from '@gstore/core';

@Injectable()
export class OrderRepository {
  constructor(readonly prisma: PrismaProvider) {}

  async findAll(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany();
    return orders as any;
  }
  async findById(id: number): Promise<Order[]> {
    const orders = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: { product: { select: { id: true, name: true } } },
        },
        order: true,
      },
    });
    return orders as any;
  }

  async create(order: Order): Promise<void> {
    await this.prisma.order.create({
      data: {
        date: order.date,
        status: order.status,
        totalCost: order.totalCost,
        paymentMethod: order.paymentMethod,
        order: { create: { ...order.orderDelivery } },
        items: {
          create: order.items.map((item) => ({
            productId: item.product.id,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
          })),
        },
      },
    });
  }

  async delete(id: number): Promise<void> {
    const order = await this.prisma.order.findUnique({
      where: { id },
    });

    if (!order) return;

    await this.prisma.$transaction([
      this.prisma.orderItem.deleteMany({ where: { orderId: id } }),
      this.prisma.order.delete({ where: { id } }),
      this.prisma.orderDelivery.delete({ where: { id: order.orderId } }),
    ]);
  }
}
