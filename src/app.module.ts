import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import Data  from './data.entity';
import Game_data from './game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'data_laser_tag',
      entities: [Data ,Game_data],
      synchronize: true,
      useUnifiedTopology: true
    }),
    DataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
