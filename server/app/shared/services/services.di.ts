import { Container } from 'inversify';
import {TMDBServices} from './TMDBServices';
import {LoggerService} from './loggerService';

export class ServicesDi {
    public static registerDi(container: Container, symbols: any) {
        container.bind<TMDBServices>(symbols.TMDBServices).to(TMDBServices).inSingletonScope();
        container.bind<LoggerService>(symbols.LoggerService).to(LoggerService).inSingletonScope();
    }
}
