import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.catalogActivity.findMany();
  }

  create(data: { name: string }) {
    return this.prisma.catalogActivity.create({ data });
  }
}