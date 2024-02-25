import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VapesService {
  constructor(private prismaService: PrismaService) {}

  async getVapes() {
    return await this.prismaService.vape.findMany();
  }

  async getVapeById(id: string) {
    return await this.prismaService.vape.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  async getVapesByUserId(userId: string) {
    return await this.prismaService.vape.findMany({
      where: {
        userId: parseInt(userId),
      },
    });
  }
}
