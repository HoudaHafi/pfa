import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
@Injectable()
export class UsersService {
  constructor(@InjectModel('users')
  private userModel : Model<IUser>){}

  async createUser(createUserDto: CreateUserDto) :Promise<IUser> {
    const newUser= new this.userModel(createUserDto)
    return await newUser.save()
  }

async findByUserName(userName :string):Promise<IUser>{
  return this.userModel.findOne({userName}).exec()
}

async findByItems(items:string):Promise<IUser[]>{
  return this.userModel.find({items}).exec()
}

  async findAllUsers():Promise<IUser[]> {
    const usersData=await this.userModel.find().exec()

    if(!usersData || usersData.length===0){
      throw new NotFoundException("User Not found")
    }
    return usersData
  }

  async findOneUser(userId: string):Promise<IUser> {
    const existingUser=await this.userModel.findById(userId).exec()

    if(!existingUser){
      throw new NotFoundException("User Not found")
    }
    return existingUser
  }

  async updateUser(userId:string, updateUserDto: UpdateUserDto):Promise<IUser> {
    const updatedUser = await this.userModel.findByIdAndUpdate(userId , updateUserDto,{new:true})
    if (!updatedUser){
      throw new NotFoundException("User Not Found")
    }
    return updatedUser
  }

  async removeUser (userId: string) :Promise<IUser> {
    const deleteduser=await this.userModel.findByIdAndDelete(userId)

    if(!deleteduser){
      throw new NotFoundException('user not found')
    }
    return deleteduser
  }

  
}
