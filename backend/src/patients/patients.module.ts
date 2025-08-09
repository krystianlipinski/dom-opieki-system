import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- Ważny import

@Module({
  imports: [PrismaModule], // <-- Dodajemy go tutaj
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}