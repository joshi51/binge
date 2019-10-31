import { Container } from 'inversify';
import {TMDBServices} from './';

export class ServicesDi {
    public static registerDi(container: Container, symbols: any) {
        container.bind<TMDBServices>(symbols.TMDBServices).to(TMDBServices).inSingletonScope();
    }
}
