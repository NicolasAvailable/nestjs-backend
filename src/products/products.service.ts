import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Products, ProductsDocument } from './schema/products.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Products.name) private ProductModel: Model<ProductsDocument>
  ){}

  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.ProductModel.create(createProductDto);
    console.log('creando nuevo producto' ,newProduct);
    return newProduct
  }

  findAll() {
    return this.ProductModel.find();
  }

  findOne(id: string) {
    return this.ProductModel.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.ProductModel.findByIdAndUpdate(id, updateProductDto);
  }

  remove(id: string) {
    return this.ProductModel.findByIdAndRemove(id);
  }
}
