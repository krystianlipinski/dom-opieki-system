import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- DODAJ IMPORT

@Module({
  imports: [PrismaModule], // <-- DODAJ TĘ LINIĘ
  controllers: [PatientsController],
  providers: [PatientsService],
})
export class PatientsModule {}