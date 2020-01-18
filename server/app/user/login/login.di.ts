import { Container } from 'inversify';
import { LoginControllers } from './login.controllers';
import {LoginServices} from './login.services';
import {LoginRoutes} from './login.routes';

export class LoginDi {
    public static registerDi(container: Container, symbols: any) {
        container.bind<LoginServices>(symbols.LoginServices).to(LoginServices).inSingletonScope();
        container.bind<LoginRoutes>(symbols.LoginRoutes).to(LoginRoutes).inSingletonScope();
        container.bind<LoginControllers>(symbols.LoginControllers).to(LoginControllers).inSingletonScope();
    }
}
