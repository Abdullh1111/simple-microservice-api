import { PrismaService } from './prisma/prisma.service';
import { CreateUserDto } from './app.dto';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): string;
    createUser(data: CreateUserDto): Promise<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }>;
    findAllUsers(): Promise<{
        name: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        id: number;
    }[]>;
}
