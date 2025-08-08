import { deletePatient, Patient } from '../services/apiService';

interface PatientListProps {
  patients: Patient[];
  onDelete: (id: number) => void;
  onEdit: (patient: Patient) => void;
}

const PatientList = ({ patients, onDelete, onEdit }: PatientListProps) => {
  const handleDelete = async (id: number) => {
    if (window.confirm('Czy na pewno chcesz usunąć tego pacjenta?')) {
      try {
        await deletePatient(id);
        alert('Pacjent usunięty pomyślnie.');
        onDelete(id);
      } catch (error) {
        console.error('Błąd podczas usuwania pacjenta:', error);
        alert('Nie udało się usunąć pacjenta.');
      }
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Priorytet</th>
          <th>Akcje</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.id}</td>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.carePriority}</td>
            <td>
              <button onClick={() => onEdit(patient)} style={{ marginRight: '5px' }}>
                Edytuj
              </button>
              <button onClick={() => handleDelete(patient.id)}>Usuń</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientList;