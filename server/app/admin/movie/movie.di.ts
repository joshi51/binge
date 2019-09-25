import {Container} from 'inversify';
import {MovieRoutes} from "./movie.routes";
import {MovieControllers} from "./movie.controllers";
import {MovieServices} from "./movie.services";
export class MovieDi {
    public static registerDi(container: Container, symbols: any) {
        container.bind<MovieRoutes>(symbols.MovieRoutes).to(MovieRoutes).inSingletonScope();
        container.bind<MovieServices>(symbols.MovieServices).to(MovieServices).inSingletonScope();
        container.bind<MovieControllers>(symbols.MovieControllers).to(MovieControllers).inSingletonScope();
    }
}