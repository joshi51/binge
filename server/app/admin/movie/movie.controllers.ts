import {inject, injectable} from "inversify";
import {Symbols} from "../../config/symbols";
import * as express from 'express';
import {MovieServices} from "./movie.services";

@injectable()
export class MovieControllers {
    constructor(@inject(Symbols.MovieServices) private movieServices: MovieServices){}
    getMovieById = async (req: express.Request, res: express.Response) => {
        try {
            let movieId = req.params.id;
            let movie = await this.movieServices.getMovieById(movieId);
            res.send(movie)
        } catch (err) {
            console.log('ERROR:', err)
        }
    }
    
    insertMovie = async (req: express.Request, res: express.Response) => {
        try {
            let params = req.body;
            let movie = await this.movieServices.insertMovie(params);
            res.send(movie);
        } catch (err) {
            console.log('ERROR:',err)
        }
    }
}
