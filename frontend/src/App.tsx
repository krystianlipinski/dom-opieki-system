import { useState, useEffect } from 'react';
import { getAllPatients, Patient } from './services/patientService';
import PatientList from './components/PatientList';
import AddPatientForm from './components/AddPatientForm';
import './App.css';

function App() {
  const [patients, setPatients] = useState<Patient[]>([]);
  // Nowy stan do przechowywania pacjenta, którego aktualnie edytujemy
  const [editingPatient, setEditingPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPatients = async () => {
    try {
      setLoading(true);
      const data = await getAllPatients();
      setPatients(data);
    } catch (err) {
      setError('Nie udało się pobrać danych pacjentów.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // Funkcja, która ustawia pacjenta do edycji
  const handleEditPatient = (patient: Patient) => {
    setEditingPatient(patient);
  };
  
  // Funkcja, która jest wywoływana po udanym dodaniu lub edycji
  const handleFormSubmit = () => {
    setEditingPatient(null); // Czyścimy stan edycji
    fetchPatients(); // Pobieramy świeżą listę pacjentów z serwera
  };

  const handlePatientDeleted = (deletedPatientId: number) => {
    setPatients((prevPatients) =>
      prevPatients.filter((patient) => patient.id !== deletedPatientId)
    );
  };

  return (
    <div className="App">
      <h1>Zarządzanie Pacjentami</h1>
      
      {/* Przekazujemy pacjenta do edycji i nową funkcję do formularza */}
      <AddPatientForm
        patientToEdit={editingPatient}
        onFormSubmit={handleFormSubmit}
      />
      
      <hr />
      
      <h2>Lista Pacjentów</h2>
      {loading && <div>Ładowanie danych...</div>}
      {error && <div>Błąd: {error}</div>}
      {!loading && !error && (
        <PatientList
          patients={patients}
          onDelete={handlePatientDeleted}
          onEdit={handleEditPatient} // Przekazujemy funkcję edycji
        />
      )}
    </div>
  );
}

export default App;