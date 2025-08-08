import apiClient from '../api';

// Definiujemy, jak wygląda obiekt pacjenta (na razie uproszczony)
export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  carePriority: string;
}

// Funkcja do pobierania wszystkich pacjentów
export const getAllPatients = async (): Promise<Patient[]> => {
  const response = await apiClient.get<Patient[]>('/patients');
  return response.data;
};

// Funkcja do tworzenia nowego pacjenta
// Używamy typu `any`, aby na razie uprościć sprawę. Później to poprawimy.
export const createPatient = async (patientData: any): Promise<Patient> => {
  const response = await apiClient.post<Patient>('/patients', patientData);
  return response.data;
};

export const deletePatient = async (id: number): Promise<void> => {
  await apiClient.delete(`/patients/${id}`);
};

// Definiujemy, jakie dane można zaktualizować
export interface PatientUpdateData {
  firstName?: string;
  lastName?: string;
  carePriority?: string;
}

// Funkcja do aktualizacji pacjenta
export const updatePatient = async (id: number, data: PatientUpdateData): Promise<Patient> => {
  const response = await apiClient.patch<Patient>(`/patients/${id}`, data);
  return response.data;
};

// Tutaj w przyszłości dodamy funkcje updatePatient, deletePatient itd.