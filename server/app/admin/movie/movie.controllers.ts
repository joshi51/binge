import {inject, injectable} from "inversify";
import {Symbols} from "../../config/symbols";
import {MovieServices} from "./movie.services";

@injectable()
export class MovieControllers {
    constructor(@inject(Symbols.MovieServices) private movieServices: MovieServices){}
    public async getMovieById(req, res){
        try {
            let movie = await this.movieServices.getMovieById('5d89b6a6ecbd1509be2e8407');
            res.send(movie)
        } catch (err) {
            console.log('ERROR:', err)
        }
    }
}