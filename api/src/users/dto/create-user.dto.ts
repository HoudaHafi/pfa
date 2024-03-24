import { IsString , IsNotEmpty , IsNumber} from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    items:string;

    @IsString()
    @IsNotEmpty()
    fullName:string;

    @IsString()
    @IsNotEmpty()
    userName:string;

    @IsString()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    @IsString()
    @IsNotEmpty()
    adress:string;

    @IsNumber()
    @IsNotEmpty()
    phone:string;

}
