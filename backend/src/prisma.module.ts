import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module'; // <-- 1. Dodaj ten import

@Module({
  imports: [PrismaModule], // <-- 2. Dodaj PrismaModule tutaj
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}