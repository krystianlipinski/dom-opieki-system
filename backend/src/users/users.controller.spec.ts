import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserModel, Prisma } from '@prisma/client';

@Controller('users') // Wszystkie endpointy w tym pliku będą pod adresem /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post() // Obsługa żądania POST na /users
  async createUser(
    @Body() userData: Prisma.UserCreateInput,
  ): Promise<UserModel> {
    // Na razie hasło jest zapisywane jako zwykły tekst.
    // W przyszłości dodamy tu hashowanie (szyfrowanie) hasła.
    return this.usersService.createUser(userData);
  }

  @Get() // Obsługa żądania GET na /users
  async getAllUsers(): Promise<UserModel[]> {
    return this.usersService.users(); // Używamy metody `users` z serwisu
  }
}