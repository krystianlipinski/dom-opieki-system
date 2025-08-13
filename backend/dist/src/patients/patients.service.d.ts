import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class PatientsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.PatientCreateInput): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        carePriority: import(".prisma/client").$Enums.Priority;
        completedByUserId: number | null;
    }>;
    findAll(): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        carePriority: import(".prisma/client").$Enums.Priority;
        completedByUserId: number | null;
    }[]>;
}
