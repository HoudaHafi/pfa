import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ITask } from './interfaces/task.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProject } from 'src/projects/interfaces/project.interface';

@Injectable()
export class TasksService {
  constructor(@InjectModel('tasks')
  private taskModel : Model<ITask>,
  @InjectModel('projects')
  private projectModel : Model<IProject>,){}

  async createTask(createTaskDto: CreateTaskDto) :Promise<ITask> {
    const newTask= new this.taskModel(createTaskDto)
    await this.projectModel.updateOne({_id:createTaskDto.project},
      {$push:{tasks:newTask._id}})
    return await newTask.save()
  }

  async findAllTasks():Promise<ITask[]> {
    const tasksData=await this.taskModel.find().populate("project").exec()

    if(!tasksData || tasksData.length===0){
      throw new NotFoundException("Task Not found")
    }
    return tasksData
  }

  async findOneTask(taskId: string):Promise<ITask> {
    const existingTask=await this.taskModel.findById(taskId).exec()

    if(!existingTask){
      throw new NotFoundException("Task Not found")
    }
    return existingTask
  }

  async updateTask(taskId:string, updateTaskDto: UpdateTaskDto):Promise<ITask> {
    const updatedTask = await this.taskModel.findByIdAndUpdate(taskId , updateTaskDto,{new:true})
    if (!updatedTask){
      throw new NotFoundException("Task Not Found")
    }
    return updatedTask
  }

  async removeTask (taskId: string) :Promise<ITask> {
    const deletedtask=await this.taskModel.findByIdAndDelete(taskId)
    await this.projectModel.updateOne({_id:deletedtask.project},
      {$pull:{tasks:deletedtask._id}})

    if(!deletedtask){
      throw new NotFoundException('task not found')
    }
    return deletedtask
  }
}
