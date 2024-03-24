import { IsString , IsNotEmpty , IsNumber} from "class-validator";

export class CreateSalaryDto {
    @IsString()
    @IsNotEmpty()
    items:string;
}
