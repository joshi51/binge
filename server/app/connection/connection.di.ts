import {Container} from 'inversify';
import {Connection} from "./connection";
export class ConnectionDi {
    public static registerDi(container: Container, symbols: any) {
        container.bind<Connection>(symbols.ArticleRoutes).to(Connection).inSingletonScope()
    }
    
    /*public static getSymbols() {
        return {
            ArticleRoutes: Symbol('ArticleRoutes')
        }
    }*/
}