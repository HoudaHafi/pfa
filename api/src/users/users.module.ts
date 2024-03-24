import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './entities/user.entity';
import { Salary, salarySchema } from 'src/salaries/entities/salary.entity';
import { Admin, adminSchema } from 'src/admin/entities/admin.entity';

@Module({
  imports:[MongooseModule.forFeature([{name :"users" , schema:userSchema ,
discriminators:[{name:Salary.name , schema:salarySchema},
{name:Admin.name , schema:adminSchema}]
}])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
