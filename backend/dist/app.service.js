"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let AppService = class AppService {
    pool = new pg_1.Pool({ connectionString: process.env.DATABASE_URL });
    async getAllPatients() {
        const result = await this.pool.query('SELECT * FROM patients ORDER BY id');
        return result.rows;
    }
    async createPatient(patientData) {
        const { firstName, lastName, priority } = patientData;
        const query = 'INSERT INTO patients (first_name, last_name, priority) VALUES ($1, $2, $3) RETURNING *';
        const values = [firstName, lastName, priority];
        const result = await this.pool.query(query, values);
        return result.rows[0];
    }
    async getAllActivities() {
        const result = await this.pool.query('SELECT * FROM activities ORDER BY id');
        return result.rows;
    }
    async createActivity(activityData) {
        const { name } = activityData;
        const query = 'INSERT INTO activities (name) VALUES ($1) RETURNING *';
        const values = [name];
        const result = await this.pool.query(query, values);
        return result.rows[0];
    }
    async deletePatient(id) {
        const query = 'DELETE FROM patients WHERE id = $1';
        await this.pool.query(query, [id]);
    }
    async updatePatient(id, patientData) {
        const { firstName, lastName, priority } = patientData;
        const query = 'UPDATE patients SET first_name = $1, last_name = $2, priority = $3 WHERE id = $4 RETURNING *';
        const values = [firstName, lastName, priority, id];
        const result = await this.pool.query(query, values);
        return result.rows[0];
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map