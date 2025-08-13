import { Controller, Get, Post, Body } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('api/patients') // <-- POPRAWKA TUTAJ
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() createPatientDto: any) {
    return this.patientsService.create(createPatientDto);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }
}