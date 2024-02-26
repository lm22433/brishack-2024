import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LeaderboardDto } from './dto/leaderboard.dto';
import { VapesService } from 'src/vapes/vapes.service';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LeaderboardService {
  constructor(
    private userService: UsersService,
    private vapesService: VapesService,
    private prismaService: PrismaService,
  ) {}

  async getLeaderboardData() {
    const users = await this.userService.getUsers();
    const leaderboardData: LeaderboardDto[] = [];

    for (const user of users) {
      const allVapeData = await this.vapesService.getVapesByUserId(
        user.userId.toString(),
      );
      const averageTokeTime =
        allVapeData.reduce((acc, vape) => {
          return acc + vape.duration;
        }, 0) / allVapeData.length;
      const tokeCount = allVapeData.length;
      const moneySpent = Math.ceil(0.85 * tokeCount) / 100;

      const leaderboardDto: LeaderboardDto = {
        username: user.username,
        name: user.name,
        tokeCount: tokeCount,
        averageTokeTime: averageTokeTime,
        moneySpent: moneySpent,
      };
      leaderboardData.push(leaderboardDto);
    }

    leaderboardData.sort((a, b) => a.tokeCount - b.tokeCount);
    return leaderboardData;
  }
}
