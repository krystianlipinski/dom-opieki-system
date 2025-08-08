import axios from 'axios';

// Tworzymy instancję Axios z domyślną konfiguracją
const apiClient = axios.create({
  // Adres URL naszego backendu. Docker Compose sprawia, że kontenery
  // mogą się ze sobą komunikować po nazwach serwisów, ale z przeglądarki
  // musimy uderzać pod adres localhost i port, który zmapowaliśmy.
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;