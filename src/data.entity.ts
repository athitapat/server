import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Data{
    @ObjectIdColumn()
    dataID?:ObjectID;
    @Column()
    player: number
    @Column()
    data: string;
}

export default Data;