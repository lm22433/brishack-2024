import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async getAllUsers() {
    return await this.prismaService.user.findMany();
  }

  async loginUser(username: string, password: string) {
    const user = await this.prismaService.user.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return { error: 'User not found' };
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) {
      return { error: 'Password is incorrect' };
    }

    return { message: 'Login successful.', userId: user.id };
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
