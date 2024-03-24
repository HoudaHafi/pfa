import { Controller, Get,Param, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  //read file
  @Get("file/:folder/:img")
  getFile(@Param('img') img , @Param('folder') folder): StreamableFile {
    const file = createReadStream(join(process.cwd(),'./upload/'+ folder+'/'+img));
    return new StreamableFile(file);
  }

  @Get("email")

  async confirmation(){
    const token=Math.floor(100 +Math.random()* 9000).toString()

    const user={
      name:"houda",
      email:'houdahafi38@gmail.com'
    }
    await this.appService.sendUseConfirmation(user , token)
  }
}
