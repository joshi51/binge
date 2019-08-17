import * as express from 'express';
import {ArticleRoutes} from './admin/article';
import { injectable, inject } from 'inversify';
import {Symbols} from "./config/symbols";

@injectable()
export class Bootstrap {
    public constructor(
        @inject(Symbols.ArticleRoutes) private articleRoutes: ArticleRoutes
    ) {
    }
    public async init (app: express.Application) {
        this.initRouting(app);
    }
    public initRouting(app: express.Application) {
        this.articleRoutes.register(app)
    }
}