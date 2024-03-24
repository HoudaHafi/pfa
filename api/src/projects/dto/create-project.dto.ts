import { IsString , IsNotEmpty } from "class-validator";

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    file:string;

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsString()
    @IsNotEmpty()
    deadline:string;

    @IsString()
    @IsNotEmpty()
    category:string;

}
