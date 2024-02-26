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

  async createVape(userId: string, duration: string) {
    return await this.prismaService.vape.create({
      data: {
        userId: parseInt(userId),
        duration: parseInt(duration),
      },
    });
  }

  async getLastVapeByUserId(userId: string) {
    return await this.prismaService.vape.findFirst({
      where: {
        userId: parseInt(userId),
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async getDailyVapesByUserId(userId: string) {
    return await this.prismaService.vape.findMany({
      where: {
        userId: parseInt(userId),
        date: {
          gte: new Date(new Date().setHours(0, 0, 0, 0)),
        },
      },
    });
  }

  async getWeeklyVapesByUserId(userId: string) {
    return await this.prismaService.vape.findMany({
      where: {
        userId: parseInt(userId),
        date: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        },
      },
    });
  }

  async getMonthlyVapesByUserId(userId: string) {
    return await this.prismaService.vape.findMany({
      where: {
        userId: parseInt(userId),
        date: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });
  }

  async getClusteredDailyVapesByUserId(userId: string) {
    const weeklyVapes = await this.getWeeklyVapesByUserId(userId);

    const daysOfWeek: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const response = {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
    };

    weeklyVapes.forEach((vape) => {
      const vapeDate = vape.date;
      const dayIndex = vapeDate.getDay();
      const dayOfWeek = daysOfWeek[dayIndex];
      response[dayOfWeek] += 1;
    });

    return response;
  }

  async getClusteredDailyVapeDurationsByUserId(userId: string) {
    const weeklyVapes = await this.getWeeklyVapesByUserId(userId);

    const daysOfWeek: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const response = {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0,
    };

    weeklyVapes.forEach((vape) => {
      const vapeDate = vape.date;
      const dayIndex = vapeDate.getDay();
      const dayOfWeek = daysOfWeek[dayIndex];
      response[dayOfWeek] += vape.duration;
    });

    return response;
  }
}
