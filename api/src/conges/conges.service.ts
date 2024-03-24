import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCongeDto } from './dto/create-conge.dto';
import { UpdateCongeDto } from './dto/update-conge.dto';
import { IConge } from './interfaces/conge.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISalarie } from 'src/salaries/interfaces/salarie.interface';

@Injectable()
export class CongesService {
  constructor(@InjectModel('conges')
  private congeModel : Model<IConge>,
  @InjectModel('salaries')
  private salaryModel : Model<ISalarie>){}

  async createConge(createCongeDto: CreateCongeDto) :Promise<IConge> {
    const newConge= new this.congeModel(createCongeDto)
    await this.salaryModel.updateOne({_id:createCongeDto.salary},
      {$push:{conges:newConge._id}})
    return await newConge.save()
  }

  async findAllConges():Promise<IConge[]> {
    const congesData=await this.congeModel.find().exec()

    if(!congesData || congesData.length===0){
      throw new NotFoundException("Conges Not found")
    }
    return congesData
  }

  async findOneConge(congeId: string):Promise<IConge> {
    const existingConge=await this.congeModel.findById(congeId).exec()

    if(!existingConge){
      throw new NotFoundException("Conge Not found")
    }
    return existingConge
  }

  async updateConge(congeId:string, updateCongeDto: UpdateCongeDto):Promise<IConge> {
    const updatedConge = await this.congeModel.findByIdAndUpdate(congeId , updateCongeDto,{new:true})
    if (!updatedConge){
      throw new NotFoundException("Conge Not Found")
    }
    return updatedConge
  }

  async removeConge (congeId: string) :Promise<IConge> {
    const deletedconge=await this.congeModel.findByIdAndDelete(congeId)
    await this.salaryModel.updateOne({_id:deletedconge.salary},
      {$pull:{conges:deletedconge._id}})

    if(!deletedconge){
      throw new NotFoundException('conge not found')
    }
    return deletedconge
  }
}
