import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Createdata } from 'src/create-data.dto';
import Data from 'src/data.entity';
import { UpdateGame } from 'src/game.dto';
import Game_data from 'src/game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DataService {
    constructor(
        @InjectRepository(Data)
        private dataRepository: Repository<Data>,
        @InjectRepository(Game_data)
        private gameDataRepository: Repository<Game_data>,
      ) {}
      
      async findGameData(p:number, data:string): Promise<Game_data>{
        await this.dataRepository.update({player: p}, {data: data});
        return this.gameDataRepository.findOne({where:{type: "state"}})
      }

      async updateGameData(updateGame: UpdateGame): Promise<any>{
        return this.gameDataRepository.update({type:"state"}, updateGame);
      }
      async findPlayerData(p: number ): Promise<any>{
        return this.dataRepository.findOne({where:{player:p }});
    
      }
    
      async updatePlayerData(p: number, createData: Createdata): Promise<any>{
        //console.log("reach service");
        //console.log(createData)
        return this.dataRepository.update({player: p}, createData);
      }
}
