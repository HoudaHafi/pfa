import {Schema , Prop , SchemaFactory} from "@nestjs/mongoose"
import { SchemaTypes, Types } from "mongoose"

@Schema()
export class Conge {
    @Prop({ required:true})
    datedeb:string
    @Prop({ required:true})
    datefin:string
    @Prop({ required:true})
    type:string
    @Prop({ required:true})
    status:string

    @Prop({type:SchemaTypes.ObjectId, ref:'salaries'})
    salary:Types.ObjectId
}
export const congeSchema=SchemaFactory.createForClass(Conge)