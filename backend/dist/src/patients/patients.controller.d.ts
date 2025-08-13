import { PatientsService } from './patients.service';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    create(createPatientDto: any): Promise<{
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
