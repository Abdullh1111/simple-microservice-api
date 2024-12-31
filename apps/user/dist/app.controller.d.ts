import { AppService } from './app.service';
import { CreateUserDto } from './app.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
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
