import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  ParseIntPipe,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient as PatientModel, Prisma } from '@prisma/client';

@Controller('patients') // Wszystkie endpointy będą pod adresem /patients
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  // POST /patients - stwórz pacjenta
  @Post()
  async createPatient(
    @Body() patientData: Prisma.PatientCreateInput,
  ): Promise<PatientModel> {
    return this.patientsService.createPatient(patientData);
  }

  // GET /patients - pobierz wszystkich pacjentów
  @Get()
  async getAllPatients(): Promise<PatientModel[]> {
    return this.patientsService.getAllPatients();
  }

  // GET /patients/:id - pobierz jednego pacjenta
  @Get(':id')
  async getPatientById(@Param('id', ParseIntPipe) id: number): Promise<PatientModel | null>  {
    return this.patientsService.getPatientById({ id });
  }

  // PATCH /patients/:id - zaktualizuj pacjenta
  @Patch(':id')
  async updatePatient(
    @Param('id', ParseIntPipe) id: number,
    @Body() patientData: Prisma.PatientUpdateInput,
  ): Promise<PatientModel> {
    return this.patientsService.updatePatient({
      where: { id },
      data: patientData,
    });
  }

  // DELETE /patients/:id - usuń pacjenta
  @Delete(':id')
  async deletePatient(@Param('id', ParseIntPipe) id: number): Promise<PatientModel> {
    return this.patientsService.deletePatient({ id });
  }
}