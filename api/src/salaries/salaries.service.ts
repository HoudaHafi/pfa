import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISalarie } from './interfaces/salarie.interface';

@Injectable()
export class SalariesService {
  constructor(@InjectModel('salaries')
  private salarieModel : Model<ISalarie>){}

 async createSalarie(createSalarieDto: CreateSalaryDto) :Promise<ISalarie> {
  const newSalarie= new this.salarieModel(createSalarieDto)
  return await newSalarie.save()
  }

  async findAllSalarie():Promise<ISalarie[]> {
    const salariesData=await this.salarieModel.find().exec()

    if(!salariesData || salariesData.length===0){
      throw new NotFoundException("Salarie Not found")
    }
    return salariesData
  }

  async findOneSalarie(salarieId: string):Promise<ISalarie> {
    const existingSalarie=await this.salarieModel.findById(salarieId).exec()

    if(!existingSalarie){
      throw new NotFoundException("User Not found")
    }
    return existingSalarie
  }

  async updateSalarie(salarieId:string, updateSalarieDto: UpdateSalaryDto):Promise<ISalarie> {
    const updatedSalarie = await this.salarieModel.findByIdAndUpdate(salarieId , updateSalarieDto,{new:true})
    if (!updatedSalarie){
      throw new NotFoundException("User Not Found")
    }
    return updatedSalarie
  }

  async removeSalarie (salarieId: string) :Promise<ISalarie> {
    const deletedSalarie=await this.salarieModel.findByIdAndDelete(salarieId)

    if(!deletedSalarie){
      throw new NotFoundException('user not found')
    }
    return deletedSalarie
  }
}
