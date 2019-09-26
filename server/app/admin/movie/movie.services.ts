import {inject, injectable} from "inversify";
import {Symbols} from "../../config/symbols";
import {MoviesSchema} from "../../connection/schemas";
import * as mongoose from 'mongoose';
import {Config} from '../../shared';

@injectable()
export class MovieServices {
    constructor(
        @inject(Symbols.MoviesSchema) private movieSchema: MoviesSchema,
        @inject(Symbols.Config) private config: Config,
    ) {
    }
    
    public getMovieById(id: string) {
        let movieModel = this.movieSchema.getModel();
        return movieModel.find({_id: new mongoose.Types.ObjectId(id)});
    }
    
    public insertMovie(params) {
        let movieModel = this.movieSchema.getModel();
        return movieModel.create(params);
    }
    
    public searchByTitle(keyword) {
        let movieModel = this.movieSchema.getModel();
        return movieModel.find({title: {$regex: `.*${keyword}.*`}});
    }
    
    public searchByTitleWithApi() {
        const options = {
            host : this.config.tmdbEndpoint,
            path : '',
            method : 'GET'
        }
    }
}
