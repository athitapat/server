import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import Data from './data.entity';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  
  }
}
