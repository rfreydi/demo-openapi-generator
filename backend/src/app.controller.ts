import { Controller, Get, Query, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Version('1')
  getHello(): string {
    return this.appService.getHello();
  }

  
  @Get()
  @Version('2')
  getHello2(): string {
    return this.getHello();
  }

  
  @Get()
  @Version('3')
  getHello3(): number {
    return +this.appService.getHello();
  }
}
