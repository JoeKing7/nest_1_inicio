import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from 'src/dto/order.dto';
import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrdersService {
  private counterId = 1;
  private orders: Order[] = [
    {
      id: 1,
      product: 'Product A',
      description: 'Description A',
      quantity: 2,
    },
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const ORDER = this.orders.find((val) => val.id === id);
    if (!ORDER) {
      throw new NotFoundException(`Order with id ${id} is not found.`);
    }
    return ORDER;
  }

  create(payload: CreateOrderDto) {
    this.counterId++;
    const NEW_ORDER = {
      id: this.counterId,
      ...payload,
    };
    this.orders.push(NEW_ORDER);
    return NEW_ORDER;
  }

  update(id: number, payload: UpdateOrderDto) {
    const ORDER = this.findOne(id);
    if (!ORDER) {
      throw new NotFoundException(`Order with ID ${id} is not found`);
    }
    const INDEX = this.orders.findIndex((item) => item.id === id);
    this.orders[INDEX] = {
      ...ORDER,
      ...payload,
    };
    return this.orders[INDEX];
  }
}
