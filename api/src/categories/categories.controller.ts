import { Controller, Get, Post, Body, Patch, Param, Delete, Res,HttpStatus
   , UseInterceptors , UploadedFile, UseGuards} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

 // @UseGuards(AccessTokenGuard)
  @Post()
  //configuration multer begin
  @UseInterceptors(
    FileInterceptor("file", {
      storage:diskStorage({
        destination:'./upload/categories',
        filename:(_request,file,callback)=>
        callback(null , `${new Date().getTime()}-${file.originalname}`)
      })
    })
  )
    //configuration multer end
  async createCategory(@Res() response ,
  @Body() createCategoryDto: CreateCategoryDto ,
   @UploadedFile() file : Express.Multer.File) {
    try {
      createCategoryDto.file=file.filename
      const newCategory= await this.categoriesService.createCategories(createCategoryDto)
      response.status(HttpStatus.CREATED).json({
        message:"category created succeefully",
        status:HttpStatus.CREATED,
        data :newCategory
      })
     } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
     }
  }

  @Get()
  async findAllCategories(@Res() response) {
    try {
      const categoriesData=await this.categoriesService.findAllCategories()
      return response.status(HttpStatus.OK).json(
        {
          message:"Categories found successfully",
          status:HttpStatus.OK,
          data:categoriesData
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
  async findOneCategorie(@Param('id') categorieId: string, @Res() response) {
    try {
      const existingCategorie=await this.categoriesService.findOneCategorie(categorieId)
      console.log(existingCategorie)
      return response.status(HttpStatus.OK).json(
        {
          message:"Categorie found successfully",
          status:HttpStatus.OK,
          data:existingCategorie,
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
        destination:'./upload/categories',
        filename:(_request,file,callback)=>
        callback(null , `${new Date().getTime()}-${file.originalname}`)
      })
    })
  )
  async updateCategorie(@Param('id') categorieId:string, @Body() updateCategorieDto: UpdateCategoryDto, @Res()Response ,@UploadedFile() file : Express.Multer.File) {
    try {
      updateCategorieDto.file=file.filename
      const updatedCategorie=await this.categoriesService.updateCategorie(categorieId, updateCategorieDto)
      return Response.status(HttpStatus.OK).json(
        {
          message:"Categorie updated successfully",
          status:HttpStatus.OK,
          data:updatedCategorie,
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
  async removeCategorie(@Param('id') categorieId: string, @Res() response) {
    try {
      const deletedcategorie=await this.categoriesService.removeCategorie(categorieId)
      return response.status(HttpStatus.OK).json(
        {
          message:"Categorie deleted successfully",
          status:HttpStatus.OK,
          data:deletedcategorie,
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
