import { PatientsService } from './patients.service';
import { Prisma } from '@prisma/client';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    create(createPatientDto: Prisma.PatientCreateInput): Prisma.Prisma__PatientClient<{
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
    findOne(id: string): Prisma.Prisma__PatientClient<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        birthDate: Date | null;
        carePriority: import(".prisma/client").$Enums.Priority;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updatePatientDto: Prisma.PatientUpdateInput): Prisma.Prisma__PatientClient<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        birthDate: Date | null;
        carePriority: import(".prisma/client").$Enums.Priority;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__PatientClient<{
        id: number;
        firstName: string;
        lastName: string;
        createdAt: Date;
        birthDate: Date | null;
        carePriority: import(".prisma/client").$Enums.Priority;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
