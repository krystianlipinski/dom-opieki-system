import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PatientsService {
  constructor(private prisma: PrismaService) {}

  // Tworzenie pacjenta
  create(data: Prisma.PatientCreateInput) {
    return this.prisma.patient.create({ data });
  }

  // Pobieranie wszystkich pacjentów
  findAll() {
    return this.prisma.patient.findMany();
  }

  // Pobieranie jednego pacjenta po ID
  findOne(id: number) {
    return this.prisma.patient.findUnique({ where: { id } });
  }

  // Aktualizacja pacjenta po ID
  update(id: number, data: Prisma.PatientUpdateInput) {
    return this.prisma.patient.update({
      where: { id },
      data,
    });
  }

  // Usuwanie pacjenta po ID
  remove(id: number) {
    return this.prisma.patient.delete({
      where: { id },
    });
  }
}