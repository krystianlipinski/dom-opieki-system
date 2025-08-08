
import { AppService } from './app.service';
import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';

@Controller('api') // Wszystkie adresy w tym pliku będą zaczynać się od /api
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('patients') // Ten adres to będzie GET /api/patients
  getAllPatients() {
    return this.appService.getAllPatients();
  }

  @Post('patients') // Ten adres to będzie POST /api/patients
  createPatient(@Body() patientData: { firstName: string; lastName: string; priority: string }) {
    return this.appService.createPatient(patientData);
  }
@Get('activities')
getAllActivities() {
  return this.appService.getAllActivities();
}

@Post('activities')
createActivity(@Body() activityData: { name: string }) {
  return this.appService.createActivity(activityData);
}

@Delete('patients/:id') // Adres to np. /api/patients/5
deletePatient(@Param('id') id: string) {
  // @Param('id') wyciąga ID z adresu URL
  return this.appService.deletePatient(parseInt(id, 10));
}

// To dodaj wewnątrz klasy AppController

@Put('patients/:id') // Adres to np. PUT /api/patients/5
updatePatient(
  @Param('id') id: string,
  @Body() patientData: { firstName: string; lastName: string; priority: string },
) {
  return this.appService.updatePatient(parseInt(id, 10), patientData);
}

}