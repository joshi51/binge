import "reflect-metadata";
import {Container} from "inversify";
import {ArticleDi} from "../admin/article/article.di";
import {Symbols} from "./symbols";
import {Bootstrap} from "../bootstrap";

const container = new Container();
ArticleDi.registerDi(container, Symbols);

container.bind<Bootstrap>(Symbols.Bootstrap).to(Bootstrap).inSingletonScope();
export default container;