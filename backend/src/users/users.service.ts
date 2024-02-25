import {
  Injectable,
  NotFoundException,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async loginUser(username: string, password: string, @Res() res: Response) {
    const user = await this.prismaService.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      throw new UnauthorizedException('Password is incorrect');
    }

    const userDto: GetUserDto = {
      userId: user.id.toString(),
      username: user.username,
      email: user.email,
      name: user.name,
    };

    res.status(200).json(userDto);
  }

  async registerUser(
    name: string,
    username: string,
    email: string,
    password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prismaService.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });
    return { message: 'User registered successfully.', userId: user.id };
  }
}
