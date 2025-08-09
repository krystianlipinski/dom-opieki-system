import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class PatientsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.PatientCreateInput): Prisma.Prisma__PatientClient<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        birthDate: Date | null;
        carePriority: import(".prisma/client").$Enums.Priority;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        birthDate: Date | null;
        carePriority: import(".prisma/client").$Enums.Priority;
    }[]>;
    findOne(id: number): Prisma.Prisma__PatientClient<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        birthDate: Date | null;
        carePriority: import(".prisma/client").$Enums.Priority;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, data: Prisma.PatientUpdateInput): Prisma.Prisma__PatientClient<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        birthDate: Date | null;
        carePriority: import(".prisma/client").$Enums.Priority;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__PatientClient<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        birthDate: Date | null;
        carePriority: import(".prisma/client").$Enums.Priority;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
