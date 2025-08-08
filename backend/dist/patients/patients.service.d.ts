import { PrismaService } from '../prisma/prisma.service';
import { Patient, Prisma } from '@prisma/client';
export declare class PatientsService {
    private prisma;
    constructor(prisma: PrismaService);
    getPatientById(patientWhereUniqueInput: Prisma.PatientWhereUniqueInput): Promise<Patient | null>;
    getAllPatients(): Promise<Patient[]>;
    createPatient(data: Prisma.PatientCreateInput): Promise<Patient>;
    updatePatient(params: {
        where: Prisma.PatientWhereUniqueInput;
        data: Prisma.PatientUpdateInput;
    }): Promise<Patient>;
    deletePatient(where: Prisma.PatientWhereUniqueInput): Promise<Patient>;
}
