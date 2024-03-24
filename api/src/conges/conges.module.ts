import { Module } from '@nestjs/common';
import { CongesService } from './conges.service';
import { CongesController } from './conges.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { congeSchema } from './entities/conge.entity';
import { salarySchema } from 'src/salaries/entities/salary.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:'conges' , schema:congeSchema}]),
  MongooseModule.forFeature([{name:'salaries' , schema:salarySchema}])],
  controllers: [CongesController],
  providers: [CongesService]
})
export class CongesModule {}
