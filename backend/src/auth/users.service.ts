import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Założenie: masz PrismaService

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // Ta funkcja była brakująca!
  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  // Możesz tu dodać inne funkcje w przyszłości, np. do tworzenia użytkowników
}