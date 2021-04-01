import { Body, Get, Param, Post } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Createdata } from 'src/create-data.dto';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    constructor(private dataService: DataService) {}

  @Get('/:p')
  async findData(@Param('p', ParseIntPipe) p: number): Promise<any>{
    return this.dataService.findData(p);
  }

  @Post('/:p')
  async updateData(@Body() createData: Createdata,
    @Param('p', ParseIntPipe) p: number): Promise<any>{
    console.log("body", createData)
    return this.dataService.updateData(p, createData);
  }
}
