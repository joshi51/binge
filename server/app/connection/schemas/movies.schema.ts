import * as mongoose from 'mongoose';
import {injectable} from "inversify";

@injectable()
export class MoviesSchema {
    Schema = mongoose.Schema;
    moviesSchema: mongoose.Schema;
    moviesModel;
    public initMovieSchema() {
        this.moviesSchema = new this.Schema({
            title: String,
            plot: String,
            poster: [],
            genre: String,
        });
        this.moviesModel = mongoose.model('Movies', this.moviesSchema);
    }
    
    public getModel() {
        return this.moviesModel
    }
}
