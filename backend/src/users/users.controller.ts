import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Post('/login')
  async loginUser(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    try {
      await this.userService.loginUser(
        loginUserDto.username,
        loginUserDto.password,
        res,
      );
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof UnauthorizedException
      ) {
        res.status(error.getStatus()).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }

  @Post('/register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    return await this.userService.registerUser(
      registerUserDto.name,
      registerUserDto.username,
      registerUserDto.email,
      registerUserDto.password,
    );
  }
}
