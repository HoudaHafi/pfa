import { IsString , IsNotEmpty } from "class-validator";

export class CreateCongeDto {
    @IsString()
    @IsNotEmpty()
    datedeb:string;

    @IsString()
    @IsNotEmpty()
    datefin:string;

    @IsString()
    @IsNotEmpty()
    type:string;

    @IsString()
    @IsNotEmpty()
    status:string;

    @IsString()
    @IsNotEmpty()
    salary:string;
}