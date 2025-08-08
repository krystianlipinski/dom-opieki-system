import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PatientsPage from './pages/PatientsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import LoginPage from './pages/LoginPage'; // Nowy import
import './App.css';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <div>
        <nav style={{ marginBottom: '2rem', padding: '1rem', background: '#f0f0f0' }}>
          {/* Pokazuj linki tylko jeśli jesteśmy zalogowani */}
          {token && (
            <>
              <Link to="/patients" style={{ marginRight: '1rem' }}>Zarządzanie Pacjentami</Link>
              <Link to="/activities">Zarządzanie Czynnościami</Link>
            </>
          )}
        </nav>

        <Routes>
          {/* Jeśli nie ma tokenu, każda ścieżka prowadzi do logowania */}
          {!token ? (
            <Route path="*" element={<LoginPage />} />
          ) : (
            <>
              <Route path="/patients" element={<PatientsPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="*" element={<PatientsPage />} /> 
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;