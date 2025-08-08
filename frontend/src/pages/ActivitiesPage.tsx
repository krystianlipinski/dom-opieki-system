import React, { useState, useEffect } from 'react';
import { Activity, getAllActivities, createActivity } from '../services/apiService';

const ActivitiesPage = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [newActivityName, setNewActivityName] = useState('');

  const fetchActivities = async () => {
    const data = await getAllActivities();
    setActivities(data);
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActivityName.trim()) return;
    await createActivity({ name: newActivityName });
    setNewActivityName('');
    fetchActivities(); // Odśwież listę
  };

  return (
    <div style={{ padding: '0 2rem' }}>
      <h1>Zarządzanie Czynnościami</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <h3>Dodaj nową czynność</h3>
        <input
          type="text"
          value={newActivityName}
          onChange={(e) => setNewActivityName(e.target.value)}
          placeholder="Nazwa czynności"
        />
        <button type="submit">Dodaj</button>
      </form>

      <hr />

      <h2>Lista Czynności</h2>
      <table style={{ width: '500px', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nazwa</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivitiesPage;