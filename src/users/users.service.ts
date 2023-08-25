import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, Users } from './schema/users.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(Users.name) private UsersModule: Model<UserDocument>
  ){}

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    const userCreated = await this.UsersModule.create(createUserDto)
    return userCreated;
  }

  findAll() {
    const allUsers = this.UsersModule.find();
    return allUsers;
  }

  findOne(id: string) {
    console.log(id);
    const User = this.UsersModule.findById(id)
    return User;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
