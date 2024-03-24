import { IsNotEmpty, IsString } from "class-validator";



export class CreateLoginDto {
    @IsString()
    @IsNotEmpty()
    userName:string;

    @IsString()
    @IsNotEmpty()
    password:string
}