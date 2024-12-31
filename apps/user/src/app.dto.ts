import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 100)
  password: string;

  role?: string; // Optional, default value is "user"

  createdAt?: Date; // Optional, defaults to current date
}
