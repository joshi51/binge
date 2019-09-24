import "reflect-metadata";
import {Container} from "inversify";
import {ArticleDi} from "../admin/article/article.di";
import {Symbols} from "./symbols";
import {Bootstrap} from "../bootstrap";
import {ConnectionDi} from "../connection/connection.di";
const appSettings = require('../config.json');
const container = new Container();
container.bind('Config').toConstantValue((key: string) => appSettings[key]);
container.bind(Symbols.Config).toConstantValue(appSettings);

ArticleDi.registerDi(container, Symbols);
ConnectionDi.registerDi(container, Symbols);

container.bind<Bootstrap>(Symbols.Bootstrap).to(Bootstrap).inSingletonScope();
export default container;