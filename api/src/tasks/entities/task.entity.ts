import {Schema , Prop , SchemaFactory} from "@nestjs/mongoose"
import { SchemaTypes, Types } from "mongoose"
@Schema()
export class Task {
    @Prop({ required:true , unique:true})
    name:string
    @Prop({ required:true})
    description:string

    @Prop({type:SchemaTypes.ObjectId, ref:'projects'})
    project:Types.ObjectId
}
export const taskSchema=SchemaFactory.createForClass(Task)
