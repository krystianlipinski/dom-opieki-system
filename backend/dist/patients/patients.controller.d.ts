import { PatientsService } from './patients.service';
import { Patient as PatientModel, Prisma } from '@prisma/client';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    createPatient(patientData: Prisma.PatientCreateInput): Promise<PatientModel>;
    getAllPatients(): Promise<PatientModel[]>;
    getPatientById(id: number): Promise<PatientModel | null>;
    updatePatient(id: number, patientData: Prisma.PatientUpdateInput): Promise<PatientModel>;
    deletePatient(id: number): Promise<PatientModel>;
}
