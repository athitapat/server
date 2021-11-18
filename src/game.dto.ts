import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class UpdateGame{
    id:ObjectID;
    type:string;
    game:string;
    player1:string;
    player2:string;
    
}