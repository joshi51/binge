import {inject, injectable} from "inversify";
import {Symbols} from "../../config/symbols";
import {MoviesSchema} from "../../connection/schemas";
import * as mongoose from 'mongoose';

@injectable()
export class MovieServices {
    constructor(@inject(Symbols.MoviesSchema) private movieSchema: MoviesSchema) {}
    
    public getMovieById(id: string) {
        let movieModel = this.movieSchema.getModel();
        return movieModel.find({_id: new mongoose.Types.ObjectId(id)});
    }
    
    public insertMovie(params) {
        let movieModel = this.movieSchema.getModel();
        return movieModel.create(params);
    }
}
