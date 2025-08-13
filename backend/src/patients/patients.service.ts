import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PatientCreateInput) {
    console.log('--- [PatientsService] Attempting to create patient ---');
    const patient = await this.prisma.patient.create({ data });
    console.log('--- [PatientsService] Patient created successfully ---');
    return patient;
  }

  async findAll() {
    console.log('--- [PatientsService] Attempting to find all patients... ---');
    try {
      const patients = await this.prisma.patient.findMany();
      console.log(`--- [PatientsService] Found ${patients.length} patients. ---`);
      return patients;
    } catch (error) {
      console.error('--- [PatientsService] ERROR while fetching patients ---', error);
      throw error;
    }
  }
}