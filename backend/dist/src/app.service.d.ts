export declare class AppService {
    private pool;
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
    deletePatient(id: number): Promise<void>;
    updatePatient(id: number, patientData: {
        firstName: string;
        lastName: string;
        priority: string;
    }): Promise<any>;
}
