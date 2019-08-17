import * as express from 'express';
import {injectable} from "inversify";

@injectable()
export class ArticleRoutes {
    constructor(){}
    public register(app: express.Application) {
        app.get('/admin/article/:id', (req, res) => {
            res.send('working');
        })
    }
}