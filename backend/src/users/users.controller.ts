import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    // Poprawnie wywołujemy funkcję findAll()
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body() userData: Prisma.UserCreateInput) {
    return this.usersService.createUser(userData);
  }
}