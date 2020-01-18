import {inject, injectable} from "inversify";
import {Symbols} from "../../config/symbols";
import {MoviesSchema} from "../../connection/schemas";
import * as mongoose from 'mongoose';
import {Config} from '../../shared';
import { TMDBServices } from '../../shared/services';
import { MovieFactory } from './movie.factory';
import * as _ from 'lodash';

@injectable()
export class MovieServices {
    constructor(
        @inject(Symbols.MoviesSchema) private movieSchema: MoviesSchema,
        @inject(Symbols.Config) private config: Config,
        @inject(Symbols.MovieFactory) private movieFactory: MovieFactory,
        @inject(Symbols.TMDBServices) private tmdbServices: TMDBServices,
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
    
    public async searchByTitle(keyword: string, hitApi?: string) {
        if (hitApi === 'true') {
            const response = await this.tmdbServices.search(keyword, 'en-US');
            const movies = _.map(response.data.results, result => this.movieFactory.buildMovies(result));
            return movies;
        } else {
            let movieModel = this.movieSchema.getModel();
            return movieModel.find({title: {$regex: new RegExp(`${keyword}`, `gi`)}}).limit(20);
        }
    }
    
    public searchByTitleWithApi() {
        const options = {
            host : this.config.tmdbEndpoint,
            path : '',
            method : 'GET'
        }
    }
}
