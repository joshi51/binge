import {MoviesSchema} from "./movies.schema";
import {inject, injectable} from "inversify";
import {Symbols} from "../../config/symbols";

@injectable()
export class Schemas {
    constructor(
        @inject(Symbols.MoviesSchema) private movies: MoviesSchema
    ){}
    
    public init() {
        this.movies.initMovieSchema()
    }
}