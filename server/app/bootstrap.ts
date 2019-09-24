import * as express from 'express';
import {MovieRoutes} from './admin/movie';
import { injectable, inject } from 'inversify';
import {Symbols} from "./config/symbols";
import {Schemas} from "./connection/schemas";

@injectable()
export class Bootstrap {
    constructor(
        @inject(Symbols.MovieRoutes) private movieRoutes: MovieRoutes,
        @inject(Symbols.Schemas) private schemas: Schemas,
    ) {
    }
    public async init (app: express.Application) {
        this.initRouting(app);
        this.schemas.init();
    }
    public initRouting(app: express.Application) {
        this.movieRoutes.register(app)
    }
}