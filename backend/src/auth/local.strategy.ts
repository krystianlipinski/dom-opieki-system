import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // Mówimy Passportowi, żeby szukał pola 'username' w ciele zapytania
    super({ usernameField: 'username' });
  }

  async validate(username: string, password: string): Promise<any> {
    console.log(`--- PRÓBA WALIDACJI DLA: ${username} ---`);
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      console.log(`--- WALIDACJA NIEUDANA DLA: ${username} ---`);
      throw new UnauthorizedException();
    }
    console.log(`--- WALIDACJA POMYŚLNA DLA: ${username} ---`);
    return user;
  }
}