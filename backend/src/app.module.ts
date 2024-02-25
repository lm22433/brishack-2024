import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { VapesModule } from './vapes/vapes.module';

@Module({
  imports: [UsersModule, VapesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
