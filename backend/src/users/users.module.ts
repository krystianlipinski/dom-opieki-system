import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- Ważny import

@Module({
  imports: [PrismaModule], // <-- Dodaj go tutaj
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Eksportujemy, by AuthModule mógł go używać
})
export class UsersModule {}