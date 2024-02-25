import { Module } from '@nestjs/common';
import { VapesService } from './vapes.service';
import { PrismaService } from 'src/prisma.service';
import { VapesController } from './vapes.controller';

@Module({
  providers: [PrismaService, VapesService],
  controllers: [VapesController],
})
export class VapesModule {}
