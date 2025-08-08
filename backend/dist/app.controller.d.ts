import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllPatients(): Promise<any>;
    createPatient(patientData: {
        firstName: string;
        lastName: string;
        priority: string;
    }): Promise<any>;
    getAllActivities(): Promise<any>;
    createActivity(activityData: {
        name: string;
    }): Promise<any>;
    deletePatient(id: string): Promise<void>;
    updatePatient(id: string, patientData: {
        firstName: string;
        lastName: string;
        priority: string;
    }): Promise<any>;
}
