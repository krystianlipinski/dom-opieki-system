import { useState, useEffect } from 'react';
import { createPatient, updatePatient, Patient, PatientUpdateData } from '../services/patientService';

interface AddPatientFormProps {
  // Przekazujemy pacjenta do edycji (może być null, jeśli dodajemy nowego)
  patientToEdit: Patient | null;
  // Funkcja wywoływana po zakończeniu operacji (dodania lub edycji)
  onFormSubmit: () => void;
}

const AddPatientForm = ({ patientToEdit, onFormSubmit }: AddPatientFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [carePriority, setCarePriority] = useState('medium');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect, który obserwuje zmiany w patientToEdit
  // Jeśli dostaniemy pacjenta do edycji, wypełniamy nim formularz
  useEffect(() => {
    if (patientToEdit) {
      setFirstName(patientToEdit.firstName);
      setLastName(patientToEdit.lastName);
      setCarePriority(patientToEdit.carePriority);
    } else {
      // Jeśli nie ma pacjenta do edycji, czyścimy formularz
      setFirstName('');
      setLastName('');
      setCarePriority('medium');
    }
  }, [patientToEdit]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      alert('Imię i nazwisko są wymagane!');
      return;
    }
    setIsSubmitting(true);

    try {
      if (patientToEdit) {
        // --- Tryb Edycji ---
        const updatedData: PatientUpdateData = { firstName, lastName, carePriority };
        await updatePatient(patientToEdit.id, updatedData);
        alert('Dane pacjenta zaktualizowane!');
      } else {
        // --- Tryb Dodawania ---
        const newPatientData = { firstName, lastName, carePriority, birthDate: new Date().toISOString() };
        await createPatient(newPatientData);
        alert('Pacjent dodany pomyślnie!');
      }
      onFormSubmit(); // Informujemy komponent nadrzędny o sukcesie
    } catch (error) {
      console.error('Błąd formularza:', error);
      alert('Wystąpił błąd.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      {/* Zmieniamy tytuł w zależności od trybu */}
      <h3>{patientToEdit ? 'Edytuj dane pacjenta' : 'Dodaj nowego pacjenta'}</h3>
      <div>
        {/* Pola formularza bez zmian */}
        <input type="text" placeholder="Imię" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={{ marginRight: '10px' }}/>
        <input type="text" placeholder="Nazwisko" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={{ marginRight: '10px' }}/>
        <select value={carePriority} onChange={(e) => setCarePriority(e.target.value)} style={{ marginRight: '10px' }}>
          <option value="low">Niski</option>
          <option value="medium">Średni</option>
          <option value="high">Wysoki</option>
        </select>
        {/* Zmieniamy tekst na przycisku w zależności od trybu */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Zapisywanie...' : (patientToEdit ? 'Zapisz zmiany' : 'Dodaj')}
        </button>
      </div>
    </form>
  );
};

export default AddPatientForm;