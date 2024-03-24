import { Controller, Get, Post, Body, Patch, Param, Delete,Res,HttpStatus, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { response } from 'express';
import { IUser } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto , @Res() response) {
    try {
      const newUser=await this.usersService.createUser(createUserDto)
      return response.status(HttpStatus.CREATED).json(
        {
          message:"User created successfully",
          status:HttpStatus.CREATED,
          data:newUser
        }
      )
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
  }

  @Get('items')
  async findUsersByItems(@Query('items') items:string , @Res() response){
    try{
      const existingUser=await this.usersService.findByItems(items)
      return response.status(HttpStatus.OK).json({
        message:"User found successfully by items",
        status:HttpStatus.OK,
          data:existingUser
      })
    }catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
  }

  @Get()
  async findAllUsers(@Res() response) {
    try {
      const usersData=await this.usersService.findAllUsers()
      return response.status(HttpStatus.OK).json(
        {
          message:"Users found successfully",
          status:HttpStatus.OK,
          data:usersData
        }
      )
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
  }

  @Get(':id')
  async findOneUser(@Param('id') userId: string, @Res() response) {
    try {
      const existingUser=await this.usersService.findOneUser(userId)
      console.log(existingUser)
      return response.status(HttpStatus.OK).json(
        {
          message:"User found successfully",
          status:HttpStatus.OK,
          data:existingUser,
        }
      )
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
  }

  @Patch(':id')
  async updateUser(@Param('id') userId:string, @Body() updateUserDto: UpdateUserDto, @Res()Response) {
    try {
      const updatedUser=await this.usersService.updateUser(userId, updateUserDto)
      return Response.status(HttpStatus.OK).json(
        {
          message:"User updated successfully",
          status:HttpStatus.OK,
          data:updatedUser,
        }
      )
    } catch (error) {
      return Response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
  }

  @Delete(':id')
  async removeUser(@Param('id') userId: string, @Res() response) {
    try {
      const deletedUser=await this.usersService.removeUser(userId)
      return response.status(HttpStatus.OK).json(
        {
          message:"User deleted successfully",
          status:HttpStatus.OK,
          data:deletedUser,
        }
      )
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
    }
  }

}
