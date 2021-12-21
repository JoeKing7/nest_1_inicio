import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //multiparameters
  @Get(':category/product/:id')
  getCategories(@Param('category') category: string, @Param('id') id: string) { // specific form
    return `Product category: ${category}, with Id: ${id}`
  }
}
