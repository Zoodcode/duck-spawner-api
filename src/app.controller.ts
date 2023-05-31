import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Duck } from './duck.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getDucks(): Promise<Duck[]> {
    return this.appService.getDucks();
  }

  @Post()
  createDuck(@Body() body: { property: string }) {
    return this.appService.createDuck(body);
  }
}
