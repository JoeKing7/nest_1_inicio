import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly mail: string;

  @IsString()
  @IsNotEmpty()
  readonly pass: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
