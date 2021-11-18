import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Game_data{
    @ObjectIdColumn()
    id?:ObjectID;
    @Column()
    type: string;
    @Column()
    game: string;
    @Column()
    player1: string;
    @Column()
    player2: string;
}

export default Game_data;