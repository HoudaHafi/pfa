import { Document } from "mongoose";
export interface IProject extends Document  {
    readonly name:string;
    readonly file:string;
    readonly description:string;
    readonly deadline:string;

    readonly category:string;

}