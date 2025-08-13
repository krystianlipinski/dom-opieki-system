import { Controller, Get, Post, Body } from '@nestjs/common';
import { ActivitiesService } from './activities.service';

@Controller('api/activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }

  @Post()
  create(@Body() data: { name: string }) {
    return this.activitiesService.create(data);
  }
}