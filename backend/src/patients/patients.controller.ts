import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Prisma } from '@prisma/client';

@Controller('patients') // Wszystkie adresy tutaj będą zaczynać się od /patients
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  // POST /patients
  @Post()
  create(@Body() createPatientDto: Prisma.PatientCreateInput) {
    return this.patientsService.create(createPatientDto);
  }

  // GET /patients
  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  // GET /patients/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id); // '+' konwertuje string na number
  }

  // PATCH /patients/:id  (PATCH jest lepsze do aktualizacji niż PUT)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: Prisma.PatientUpdateInput) {
    return this.patientsService.update(+id, updatePatientDto);
  }

  // DELETE /patients/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}