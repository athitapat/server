import { Body, Get, Param, Post } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Createdata } from 'src/create-data.dto';
import { UpdateGame } from 'src/game.dto';
import Game_data from 'src/game.entity';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
    constructor(private dataService: DataService) {}

  @Get('/:p/:data')
  async findGame(@Param('p', ParseIntPipe) p: number, @Param('data') data: string): Promise<Game_data>{
    return this.dataService.findGameData(p, data);
  }

  @Post()
  async updateGame(@Body() updateGame: UpdateGame): Promise<Game_data>{
    return this.dataService.updateGameData(updateGame);
  }



  @Get('/:p')
  async findPlayerData(@Param('p', ParseIntPipe) p: number, @Param('data') data: string): Promise<any>{
    return this.dataService.findPlayerData(p);
  }

  @Post('/:p/:data')
  async updatePlayerData(@Body() createData: Createdata,
    @Param('p', ParseIntPipe) p: number): Promise<any>{
    //console.log("body", createData)
    return this.dataService.updatePlayerData(p, createData);
  }
}
