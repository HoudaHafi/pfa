import { Document } from "mongoose";
export interface IConge extends Document  {
    readonly datedeb:string;
    readonly datefin:string;
    readonly type:string;
    readonly status:string;

    readonly salary:string;

}