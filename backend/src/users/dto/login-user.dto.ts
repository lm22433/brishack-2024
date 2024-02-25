import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  readonly username: string;

  @IsNotEmpty()
  readonly password: string;
}
