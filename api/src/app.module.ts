import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { SalariesModule } from './salaries/salaries.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProjectsModule } from './projects/projects.module';
import { TasksModule } from './tasks/tasks.module';
import { CongesModule } from './conges/conges.module';
import { AdminModule } from './admin/admin.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [MongooseModule.forRoot("mongodb://127.0.0.1:27017", {dbName:"pfanpm"}), UsersModule, CategoriesModule, SalariesModule, AuthModule,
ConfigModule.forRoot({isGlobal : true}),
ProjectsModule,
TasksModule,
CongesModule,
AdminModule,
MailerModule.forRoot({
  transport:{
    host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4f9518f5ce2341",
    pass: "1dbcd4c21132f3"
  }
  },
  defaults:{
    from:'"No replay <noreply@exemple.com"'
  },
  template:{
    dir:join(__dirname , 'templates'),
    adapter:new HandlebarsAdapter(),
    options:{
      strict:true
    }
  }
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
