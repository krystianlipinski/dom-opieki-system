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
}