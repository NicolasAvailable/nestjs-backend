import { IsNotEmpty, IsNumber, isNotEmpty,  } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    phrase: string;
}
