import * as express from 'express';
import {inject, injectable} from "inversify";
import {Symbols} from "../../config";
import {Connection} from "../../connection/connection";

@injectable()
export class ArticleRoutes {
    constructor(
        @inject(Symbols.Connection) private connection: Connection
    ){}
    public register(app: express.Application) {
        app.get('/admin/article/:id', (req, res) => {
            this.connection.connectToDb().on('error', console.error.bind(console, 'connection error:'));
            this.connection.connectToDb().once('open', function() {
                console.log(`// we're connected!`);
            });
            res.send('working');
        })
    }
}