import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { IProject } from './interfaces/project.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ICategory } from 'src/categories/interfaces/category.interface';
import { unlink } from 'fs';
import { join } from 'path';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel('projects')
  private projectModel : Model<IProject>,
  @InjectModel('categories')
  private categoryModel : Model<ICategory>,
  ){}

  async createProject(createProjectDto: CreateProjectDto) :Promise<IProject> {
    const newProject= new this.projectModel(createProjectDto)
    await this.categoryModel.updateOne({_id:createProjectDto.category},
      {$push:{projects:newProject._id}})
    return await newProject.save()
  }

  async findAllProjects():Promise<IProject[]> {
    const projectsData=await this.projectModel.find().populate("category").exec()

    if(!projectsData || projectsData.length===0){
      throw new NotFoundException("Project Not found")
    }
    return projectsData
  }

  async findOneProject(projectId: string):Promise<IProject> {
    const existingProject=await this.projectModel.findById(projectId).populate("category").exec()

    if(!existingProject){
      throw new NotFoundException("Project Not found")
    }
    return existingProject
  }
  async updateProject(projectId:string, updateProjectDto: UpdateProjectDto):Promise<IProject> {
    const updatedProject = await this.projectModel.findByIdAndUpdate(projectId , updateProjectDto,{new:true})
    if (!updatedProject){
      throw new NotFoundException("Project Not Found")
    }
    return updatedProject
  }

  async removeProject (projectId: string) :Promise<IProject> {
    const deletedproject=await this.projectModel.findByIdAndDelete(projectId)
    unlink(join(process.cwd(),"./upload/projects/"+deletedproject.file),
    (err)=>{
      if(err){
        console.error(err)
        return err
      }
    })
await this.categoryModel.updateOne({_id:deletedproject.category},
  {$pull:{projects:deletedproject._id}})
    if(!deletedproject){
      throw new NotFoundException('Project deleted')
    }
    return deletedproject
  }
}
