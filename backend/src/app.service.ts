import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class AppService {
  // Tworzymy połączenie z bazą danych tylko raz
  private pool = new Pool({ connectionString: process.env.DATABASE_URL });

  // Funkcja do pobierania wszystkich pacjentów
  async getAllPatients() {
    const result = await this.pool.query('SELECT * FROM patients ORDER BY id');
    return result.rows;
  }

  // Funkcja do tworzenia nowego pacjenta
  async createPatient(patientData: { firstName: string; lastName: string; priority: string }) {
    const { firstName, lastName, priority } = patientData;
    const query = 'INSERT INTO patients (first_name, last_name, priority) VALUES ($1, $2, $3) RETURNING *';
    const values = [firstName, lastName, priority];
    
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

// Funkcja do pobierania wszystkich czynności
async getAllActivities() {
  const result = await this.pool.query('SELECT * FROM activities ORDER BY id');
  return result.rows;
}

// Funkcja do tworzenia nowej czynności
async createActivity(activityData: { name: string }) {
  const { name } = activityData;
  const query = 'INSERT INTO activities (name) VALUES ($1) RETURNING *';
  const values = [name];

  const result = await this.pool.query(query, values);
  return result.rows[0];
}
async deletePatient(id: number) {
  // Zapytanie SQL do usunięcia pacjenta o konkretnym id
  const query = 'DELETE FROM patients WHERE id = $1';
  await this.pool.query(query, [id]);
  // Przy usuwaniu nie musimy nic zwracać
}

async updatePatient(id: number, patientData: { firstName: string; lastName: string; priority: string }) {
  const { firstName, lastName, priority } = patientData;
  const query = 'UPDATE patients SET first_name = $1, last_name = $2, priority = $3 WHERE id = $4 RETURNING *';
  const values = [firstName, lastName, priority, id];

  const result = await this.pool.query(query, values);
  return result.rows[0];
}

}