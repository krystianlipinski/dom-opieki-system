import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Ta funkcja była potrzebna dla logowania
  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // DODAJEMY TĘ FUNKCJĘ do listowania użytkowników
  async findAll() {
    return this.prisma.user.findMany();
  }

  // Ta funkcja jest potrzebna dla kontrolera
  async createUser(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data });
  }
}