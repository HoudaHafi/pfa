import { Document } from "mongoose";


export interface IUser extends Document{
readonly fullName:string;
readonly userName:string;
readonly email:string;
readonly password:string;
readonly adress:string;
readonly phone:number;
readonly items:string;


}