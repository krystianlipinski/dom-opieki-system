import React, { useState, useEffect } from 'react';
import { createPatient, updatePatient, NewPatientData, Patient } from '../services/apiService';

interface Props {
  patientToEdit: Patient | null;
  onFormSubmit: () => void;
}

const AddPatientForm: React.FC<Props> = ({ patientToEdit, onFormSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [priority, setPriority] = useState('Niski');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (patientToEdit) {
      setFirstName(patientToEdit.first_name);
      setLastName(patientToedit.last_name);
      setPriority(patientToEdit.priority);
      setIsEditing(true);
    } else {
      // Resetuj formularz, gdy nie ma trybu edycji
      setFirstName('');
      setLastName('');
      setPriority('Niski');
      setIsEditing(false);
    }
  }, [patientToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) return;

    const patientData: NewPatientData = { firstName, lastName, priority };

    try {
      if (isEditing && patientToEdit) {
        // Jesteśmy w trybie edycji
        await updatePatient(patientToEdit.id, patientData);
      } else {
        // Jesteśmy w trybie dodawania
        await createPatient(patientData);
      }
      onFormSubmit(); // Poinformuj rodzica o sukcesie, aby odświeżył listę
    } catch (error) {
      console.error("Błąd zapisu pacjenta:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <h3>{isEditing ? 'Edytuj pacjenta' : 'Dodaj nowego pacjenta'}</h3>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Imię"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Nazwisko"
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Niski">Niski</option>
        <option value="Średni">Średni</option>
        <option value="Wysoki">Wysoki</option>
      </select>
      <button type="submit">{isEditing ? 'Zapisz zmiany' : 'Dodaj'}</button>
    </form>
  );
};

export default AddPatientForm;