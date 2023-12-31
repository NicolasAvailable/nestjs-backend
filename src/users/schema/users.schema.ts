import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Users & Document;

@Schema()
export class Users {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  phrase: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);