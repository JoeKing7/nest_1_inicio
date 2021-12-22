import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dto/users.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'Jhon Doe',
      mail: 'jdoe@mail.com',
      pass: '12345',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const USER = this.users.find((value) => value.id === id);
    if (!USER) {
      throw new NotFoundException(`User with Id ${id} is not found!!`);
    }
    return USER;
  }

  create(payload: CreateUserDto) {
    this.counterId++;
    const NEW_PRODUCT = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(NEW_PRODUCT);
    return NEW_PRODUCT;
  }

  update(id: number, payload: UpdateUserDto) {
    const USER = this.findOne(id);
    if (!USER) {
      throw new NotFoundException(`User with ${id} is not found!`);
    }
    const INDEX = this.users.findIndex((item) => item.id === id);
    this.users[INDEX] = {
      ...USER,
      ...payload,
    };
    return this.users[INDEX];
  }
}
