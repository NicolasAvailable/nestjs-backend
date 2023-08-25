import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';
import { IsNotEmpty, IsNumber, MinLength, isNotEmpty } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @MinLength(4)
    @IsNotEmpty()
    name?: string;

    @IsNumber()
    @IsNotEmpty()
    price?: number;
}
