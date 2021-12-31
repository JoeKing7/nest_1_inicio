import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dto/customers.dto';
import { Customer } from 'src/entities/customer.entity';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customer: Customer[] = [
    {
      id: 1,
      name: 'Customer Name',
      phone: 3293948,
    },
  ];

  findAll() {
    return this.customer;
  }

  findOne(id: number) {
    const CUSTOMER = this.customer.find((val) => val.id === id);
    if (!CUSTOMER) {
      throw new NotFoundException(`The customer with id ${id} is not found`);
    }
    return CUSTOMER;
  }

  create(payload: CreateCustomerDto) {
    this.counterId++;
    const NEW_CUSTOMER = {
      id: this.counterId,
      ...payload,
    };
    this.customer.push(NEW_CUSTOMER);
    return NEW_CUSTOMER;
  }

  update(id: number, payload: UpdateCustomerDto) {
    const CUSTOMER = this.findOne(id);
    if (!CUSTOMER) {
      throw new NotFoundException(`The customer with id ${id} is not found`);
    }
    const INDEX = this.customer.findIndex((item) => item.id === id);
    this.customer[INDEX] = {
      ...CUSTOMER,
      ...payload,
    };
    return this.customer[INDEX];
  }
}
