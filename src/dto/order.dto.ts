import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, isString, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  readonly product: string;

  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
