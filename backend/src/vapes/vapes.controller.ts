import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VapesService } from './vapes.service';
import { CreateVapeDto } from './dto/create-vape.dto';

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

  @Post()
  async createVape(@Body() createVapeDto: CreateVapeDto) {
    return await this.vapesService.createVape(
      createVapeDto.userId,
      createVapeDto.duration,
    );
  }
}
