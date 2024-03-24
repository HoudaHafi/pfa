import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus} from '@nestjs/common';
import { SalariesService } from './salaries.service';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';

@Controller('salaries')
export class SalariesController {
  constructor(private readonly salariesService: SalariesService) {}

  @Post()
  async createSalarie(@Body() createSalarieDto: CreateSalaryDto ,  @Res() response) {
    try {
      const newSalarie=await this.salariesService.createSalarie(createSalarieDto)
      return response.status(HttpStatus.CREATED).json(
        {
          message:"Salarie created successfully",
          status:HttpStatus.CREATED,
          data:newSalarie
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
  async findAllSalarie(@Res() response) {
    try {
      const salariesData=await this.salariesService.findAllSalarie()
      return response.status(HttpStatus.OK).json(
        {
          message:"Salaries found successfully",
          status:HttpStatus.OK,
          data:salariesData
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
  async findOneSalarie(@Param('id') salarieId: string, @Res() response) {
    try {
      const existingSalarie=await this.salariesService.findOneSalarie(salarieId)
      console.log(existingSalarie)
      return response.status(HttpStatus.OK).json(
        {
          message:"Salarie found successfully",
          status:HttpStatus.OK,
          data:existingSalarie,
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
  async updateSalarie(@Param('id') salarieId:string, @Body() updateSalarieDto: UpdateSalaryDto, @Res()Response) {
    try {
      const updatedSalarie=await this.salariesService.updateSalarie(salarieId, updateSalarieDto)
      return Response.status(HttpStatus.OK).json(
        {
          message:"Salarie updated successfully",
          status:HttpStatus.OK,
          data:updatedSalarie,
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
  async removeSalarie(@Param('id') salarieId: string, @Res() response) {
    try {
      const deletedSalarie=await this.salariesService.removeSalarie(salarieId)
      return response.status(HttpStatus.OK).json(
        {
          message:"Salarie deleted successfully",
          status:HttpStatus.OK,
          data:deletedSalarie,
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
