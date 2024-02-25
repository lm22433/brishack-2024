import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }

  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto) {
    return await this.userService.loginUser(
      loginUserDto.username,
      loginUserDto.password,
    );
  }

  @Post('register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    return await this.userService.registerUser(
      registerUserDto.name,
      registerUserDto.username,
      registerUserDto.email,
      registerUserDto.password,
    );
  }
}
