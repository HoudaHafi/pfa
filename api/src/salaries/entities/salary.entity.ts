import { Schema , Prop ,SchemaFactory} from "@nestjs/mongoose";
import { HydratedDocument, SchemaTypes, Types } from "mongoose";

export type SalaryDocument=HydratedDocument<Salary>
@Schema()
export class Salary {
    items:string;

    @Prop([{type:SchemaTypes.ObjectId, ref:'conges'}])
    conges:Types.ObjectId[]
}
export const salarySchema=SchemaFactory.createForClass(Salary)
