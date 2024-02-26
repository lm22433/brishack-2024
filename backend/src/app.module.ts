import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { VapesModule } from './vapes/vapes.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

@Module({
  imports: [UsersModule, VapesModule, LeaderboardModule],
})
export class AppModule {}
