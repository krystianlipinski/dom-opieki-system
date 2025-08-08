import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Serwis do komunikacji z bazą użytkowników
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // Ta funkcja sprawdza, czy hasło jest poprawne
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);
    if (user && (await bcrypt.compare(pass, user.password))) {
      // Jeśli użytkownik istnieje I hasło się zgadza...
      const { password, ...result } = user; // ...zwróć użytkownika bez hasła
      return result;
    }
    return null; // W przeciwnym razie zwróć null
  }

  // Ta funkcja generuje "bilet" (token) dla zalogowanego użytkownika
  async login(user: any) {
    const payload = {
      username: user.email,
      sub: user.id,
      role: user.role, // Dodajemy rolę do "biletu"
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}