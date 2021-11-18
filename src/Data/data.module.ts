import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import Data from 'src/data.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import Game_data from 'src/game.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Data, Game_data])
  ],
  providers: [DataService],
  controllers: [DataController]
})
export class DataModule {}
