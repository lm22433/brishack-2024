import { Module } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardController } from './leaderboard.controller';
import { UsersService } from 'src/users/users.service';
import { VapesService } from 'src/vapes/vapes.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [LeaderboardService, UsersService, VapesService, PrismaService],
  controllers: [LeaderboardController],
})
export class LeaderboardModule {}
