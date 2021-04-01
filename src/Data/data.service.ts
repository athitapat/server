import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Createdata } from 'src/create-data.dto';
import Data from 'src/data.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DataService {
    constructor(
        @InjectRepository(Data)
        private dataRepository: Repository<Data>
      ) {}
      
      async findData(p: number ): Promise<any>{
        return this.dataRepository.findOne({where:{player:p }});
    
      }
    
      async updateData(p: number, createData: Createdata): Promise<any>{
        console.log("reach service");
        console.log(createData)
        return this.dataRepository.update({player: p}, createData);
      }
}
