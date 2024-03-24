import { Controller, Get, Post, Body, Patch, Param, Delete,
   Res, HttpStatus, NotFoundException, UseInterceptors , UploadedFile } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { IProject } from './interfaces/project.interface';
import { profileEnd } from 'console';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  //configuration multer begin
  @UseInterceptors(
    FileInterceptor("file", {
      storage:diskStorage({
        destination:'./upload/projects',
        filename:(_request,file,callback)=>
        callback(null , `${new Date().getTime()}-${file.originalname}`)
      })
    })
  )
  async createProject(@Body() createProjectDto: CreateProjectDto , @Res() response, 
  
  @UploadedFile() file : Express.Multer.File) {
    try {
      createProjectDto.file=file.filename
      const newProject=await this.projectsService.createProject(createProjectDto)
      return response.status(HttpStatus.CREATED).json(
        {
          message:"Project created successfully",
          status:HttpStatus.CREATED,
          data:newProject
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
  async findAllProjects(@Res() response) {
    try {
      const projectData=await this.projectsService.findAllProjects()
      return response.status(HttpStatus.OK).json(
        {
          message:"Projects found successfully",
          status:HttpStatus.OK,
          data:projectData
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
  async findOneProject(@Param('id') ProjectId: string, @Res() response) {
    try {
      const existingProject=await this.projectsService.findOneProject(ProjectId)
      console.log(existingProject)
      return response.status(HttpStatus.OK).json(
        {
          message:"Project found successfully",
          status:HttpStatus.OK,
          data:existingProject,
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
  @UseInterceptors(
    FileInterceptor("file", {
      storage:diskStorage({
        destination:'./upload/projects',
        filename:(_request,file,callback)=>
        callback(null , `${new Date().getTime()}-${file.originalname}`)
      })
    })
  )
  async updateProject(@Param('id') projectId:string, @Body() updateProjectDto: UpdateProjectDto, @Res()Response ,
  @UploadedFile() file : Express.Multer.File) {
    try {
      updateProjectDto.file=file.filename
      const updatedProject=await this.projectsService.updateProject(projectId, updateProjectDto)
      return Response.status(HttpStatus.OK).json(
        {
          message:"Project updated successfully",
          status:HttpStatus.OK,
          data:updatedProject,
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
  async removeProject(@Param('id') projectId: string, @Res() response) {
    try {
      const deletedProject=await this.projectsService.removeProject(projectId)
      return response.status(HttpStatus.OK).json(
        {
          message:"Project deleted successfully",
          status:HttpStatus.OK,
          data:deletedProject,
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
