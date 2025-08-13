import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    try {
      console.log('--- [PrismaService] Connecting to the database... ---');
      await this.$connect();
      console.log('--- [PrismaService] Database connection successful! ---');
    } catch (error) {
      console.error('--- [PrismaService] FAILED TO CONNECT TO DATABASE ---', error);
    }
  }
}