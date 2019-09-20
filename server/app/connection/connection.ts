import * as mongoose from 'mongoose';
import {injectable} from "inversify";

@injectable()
export class Connection {
    constructor(){console.log('Creating DatabaseService');}
    
    public connectToDb() {
        mongoose.connect('mongodb://@localhost:27017/binge', {useNewUrlParser: true});
        return mongoose.connection;
    }
}
