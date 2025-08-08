import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Eksportujemy serwis, aby inne moduły mogły go używać
})
export class PrismaModule {}