import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICategory } from './interfaces/category.interface';
import { join } from 'path';
import { unlink } from 'fs';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel('categories')
  private categoryModel : Model<ICategory>)
  {}
async createCategories(createCategoryDto: CreateCategoryDto): Promise<ICategory> {
    const newCategory= new this.categoryModel(createCategoryDto)
    return await newCategory.save()
  }

  async findAllCategories():Promise<ICategory[]> {
    const categoriesData=await this.categoryModel.find().exec()

    if(!categoriesData || categoriesData.length===0 ){
      throw new NotFoundException("Categories Not found")
    }
    return categoriesData
  }

  async findOneCategorie(categorieId: string):Promise<ICategory> {
    const existingCategorie=await this.categoryModel.findById(categorieId).exec()

    if(!existingCategorie){
      throw new NotFoundException("Categorie Not found")
    }
    return existingCategorie
  }
  async updateCategorie(categorieId:string, updateCategorieDto: UpdateCategoryDto):Promise<ICategory> {
    const updatedCategorie = await this.categoryModel.findByIdAndUpdate(categorieId , updateCategorieDto,{new:true})
    if (!updatedCategorie){
      throw new NotFoundException("Categorie Not Found")
    }
    return updatedCategorie
  }

  async removeCategorie (categorieId: string) :Promise<ICategory> {
    const deletedcategorie=await this.categoryModel.findByIdAndDelete(categorieId)

    unlink(join(process.cwd(),"./upload/categories/"+deletedcategorie.file),
    (err)=>{
      if(err){
        console.error(err)
        return err
      }
    })

    if(!deletedcategorie){
      throw new NotFoundException('categorie not found')
    }
    return deletedcategorie
  }
}
