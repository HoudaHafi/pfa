import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto , @Res() response) {
    try {
      const newTask=await this.tasksService.createTask(createTaskDto)
      return response.status(HttpStatus.CREATED).json(
        {
          message:"Task created successfully",
          status:HttpStatus.CREATED,
          data:newTask
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
  async findAllTasks(@Res() response) {
    try {
      const tasksData=await this.tasksService.findAllTasks()
      return response.status(HttpStatus.OK).json(
        {
          message:"Tasks found successfully",
          status:HttpStatus.OK,
          data:tasksData
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
  async findOneTask(@Param('id') taskId: string, @Res() response) {
    try {
      const existingTask=await this.tasksService.findOneTask(taskId)
      console.log(existingTask)
      return response.status(HttpStatus.OK).json(
        {
          message:"Task found successfully",
          status:HttpStatus.OK,
          data:existingTask,
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
  async updateTask(@Param('id') taskId:string, @Body() updateTaskDto: UpdateTaskDto, @Res()Response) {
    try {
      const updatedTask=await this.tasksService.updateTask(taskId, updateTaskDto)
      return Response.status(HttpStatus.OK).json(
        {
          message:"Task updated successfully",
          status:HttpStatus.OK,
          data:updatedTask,
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
  async removeTask(@Param('id') taskId: string, @Res() response) {
    try {
      const deletedTask=await this.tasksService.removeTask(taskId)
      return response.status(HttpStatus.OK).json(
        {
          message:"Task deleted successfully",
          status:HttpStatus.OK,
          data:deletedTask,
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
