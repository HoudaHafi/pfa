import {Schema , Prop , SchemaFactory} from "@nestjs/mongoose"
import { SchemaTypes, Types } from "mongoose"
@Schema()
export class Category {
    @Prop({ required:true , unique:true})
    name:string
    @Prop({ required:true})
    file:string
    @Prop([{type:SchemaTypes.ObjectId, ref:'projects'}])
    projects:Types.ObjectId[]
}
export const categorySchema=SchemaFactory.createForClass(Category)