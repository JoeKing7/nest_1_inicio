import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dto/customers.dto';
import { CustomersService } from 'src/services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getCustomers() {
    return this.customerService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getCustomer(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body() payload: CreateCustomerDto) {
    return this.customerService.create(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, payload);
  }
}
