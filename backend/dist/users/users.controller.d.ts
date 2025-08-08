import { UsersService } from './users.service';
import { User as UserModel, Prisma } from '@prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(userData: Prisma.UserCreateInput): Promise<UserModel>;
    getAllUsers(): Promise<UserModel[]>;
}
