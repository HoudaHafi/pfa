import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CongesService } from './conges.service';
import { CreateCongeDto } from './dto/create-conge.dto';
import { UpdateCongeDto } from './dto/update-conge.dto';

@Controller('conges')
export class CongesController {
  constructor(private readonly congesService: CongesService) {}

  @Post()
  async createConge(@Body() createCongeDto: CreateCongeDto , @Res() response) {
    try {
      const newConge=await this.congesService.createConge(createCongeDto)
      return response.status(HttpStatus.CREATED).json(
        {
          message:"Conge created successfully",
          status:HttpStatus.CREATED,
          data:newConge
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

  @Get()
  async findAllConges(@Res() response) {
    try {
      const congesData=await this.congesService.findAllConges()
      return response.status(HttpStatus.OK).json(
        {
          message:"Conges found successfully",
          status:HttpStatus.OK,
          data:congesData
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
  async findOneConge(@Param('id') congeId: string, @Res() response) {
    try {
      const existingConge=await this.congesService.findOneConge(congeId)
      console.log(existingConge)
      return response.status(HttpStatus.OK).json(
        {
          message:"Conge found successfully",
          status:HttpStatus.OK,
          data:existingConge,
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
  async updateConge(@Param('id') congeId:string, @Body() updateCongeDto: UpdateCongeDto, @Res()Response) {
    try {
      const updatedConge=await this.congesService.updateConge(congeId, updateCongeDto)
      return Response.status(HttpStatus.OK).json(
        {
          message:"Conge updated successfully",
          status:HttpStatus.OK,
          data:updatedConge,
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
  async removeConge(@Param('id') congeId: string, @Res() response) {
    try {
      const deletedconge=await this.congesService.removeConge(congeId)
      return response.status(HttpStatus.OK).json(
        {
          message:"Conge deleted successfully",
          status:HttpStatus.OK,
          data:deletedconge,
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
