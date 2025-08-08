import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// KROK 4 - od razu dodajemy "strażnika" do zapytań
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Szukamy tokenu w pamięci przeglądarki
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Dołączamy go do nagłówka
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api; 