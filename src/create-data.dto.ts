import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class Createdata{
    dataID:ObjectID;
    player:number;
    data:number;
    
}