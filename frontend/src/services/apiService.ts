import api from '../api/api';

// --- Pacjenci ---
export interface Patient {
  id: number;
  first_name: string;
  last_name: string;
  priority: string;
}

export interface NewPatientData {
  firstName: string;
  lastName: string;
  priority: string;
}

export const getAllPatients = async (): Promise<Patient[]> => {
  const response = await api.get('/api/patients');
  return response.data;
};

export const createPatient = async (patientData: NewPatientData): Promise<Patient> => {
  const response = await api.post('/api/patients', patientData);
  return response.data;
};

export const deletePatient = async (id: number): Promise<void> => {
  await api.delete(`/api/patients/${id}`);
};

// TA FUNKCJA BYŁA BRAKUJĄCA
export const updatePatient = async (id: number, patientData: NewPatientData): Promise<Patient> => {
  const response = await api.put(`/api/patients/${id}`, patientData);
  return response.data;
};


// --- Czynności ---
export interface Activity {
  id: number;
  name: string;
}

export const getAllActivities = async (): Promise<Activity[]> => {
  const response = await api.get('/api/activities');
  return response.data;
};

export const createActivity = async (activityData: { name: string }): Promise<Activity> => {
  const response = await api.post('/api/activities', activityData);
  return response.data;
};

export const login = async (credentials: any) => {
  // Zakładam, że endpoint logowania to /auth/login, zmień jeśli jest inaczej
  const response = await api.post('/auth/login', credentials);
  return response.data;
};