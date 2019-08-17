import {Container} from 'inversify';
import {ArticleRoutes} from "./article.routes";
export class ArticleDi {
    public static registerDi(container: Container, symbols: any) {
        container.bind<ArticleRoutes>(symbols.ArticleRoutes).to(ArticleRoutes).inSingletonScope()
    }
    
    /*public static getSymbols() {
        return {
            ArticleRoutes: Symbol('ArticleRoutes')
        }
    }*/
}