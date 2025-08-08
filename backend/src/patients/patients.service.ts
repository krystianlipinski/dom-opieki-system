import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Patient, Prisma } from '@prisma/client';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  // Pobierz jednego pacjenta po ID
  async getPatientById(
    patientWhereUniqueInput: Prisma.PatientWhereUniqueInput,
  ): Promise<Patient | null> {
    const patient = await this.prisma.patient.findUnique({
      where: patientWhereUniqueInput,
    });
    if (!patient) {
      throw new NotFoundException(`Patient not found.`);
    }
    return patient;
  }

  // Pobierz wszystkich pacjentów
  async getAllPatients(): Promise<Patient[]> {
    return this.prisma.patient.findMany();
  }

  // Stwórz nowego pacjenta
  async createPatient(data: Prisma.PatientCreateInput): Promise<Patient> {
    return this.prisma.patient.create({
      data,
    });
  }

  // Zaktualizuj dane pacjenta
  async updatePatient(params: {
    where: Prisma.PatientWhereUniqueInput;
    data: Prisma.PatientUpdateInput;
  }): Promise<Patient> {
    const { where, data } = params;
    return this.prisma.patient.update({
      data,
      where,
    });
  }

  // Usuń pacjenta
  async deletePatient(where: Prisma.PatientWhereUniqueInput): Promise<Patient> {
    return this.prisma.patient.delete({
      where,
    });
  }
}