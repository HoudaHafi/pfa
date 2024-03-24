import { Module } from '@nestjs/common';
import { SalariesService } from './salaries.service';
import { SalariesController } from './salaries.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { salarySchema } from './entities/salary.entity';

@Module({
  imports:[MongooseModule.forFeature([{name :"salaries" , schema:salarySchema}])],
  controllers: [SalariesController],
  providers: [SalariesService]
})
export class SalariesModule {}
