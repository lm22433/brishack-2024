import { Controller, Get, Param } from '@nestjs/common';
import { VapesService } from './vapes.service';

@Controller('api/vapes')
export class VapesController {
  constructor(private readonly vapesService: VapesService) {}

  @Get()
  async getVapes() {
    return await this.vapesService.getVapes();
  }

  @Get('/:id')
  async getVapeById(@Param('id') id: string) {
    return await this.vapesService.getVapeById(id);
  }

  @Get('/user/:userId')
  async getVapesByUserId(@Param('userId') userId: string) {
    return await this.vapesService.getVapesByUserId(userId);
  }
}
