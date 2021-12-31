import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dto/categories.dto';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private category: Category[] = [
    {
      id: 1,
      name: 'Category A',
    },
  ];

  findAll() {
    return this.category;
  }

  findOne(id: number) {
    const CATEGORY = this.category.find((value) => value.id === id);
    if (!CATEGORY) {
      throw new NotFoundException(`The category with id ${id} is not found!`);
    }
    return CATEGORY;
  }

  create(payload: CreateCategoryDto) {
    this.counterId++;
    const NEW_CATEGORY = {
      id: this.counterId,
      ...payload,
    };
    this.category.push(NEW_CATEGORY);
    return this.category;
  }

  update(id: number, payload: UpdateCategoryDto) {
    const CATEGORY = this.findOne(id);
    if (!CATEGORY) {
      throw new NotFoundException(`The category with id ${id} is not found!`);
    }
    const INDEX = this.category.findIndex((item) => item.id === id);
    this.category[INDEX] = {
      ...CATEGORY,
      ...payload,
    };

    return this.category[INDEX];
  }
}
