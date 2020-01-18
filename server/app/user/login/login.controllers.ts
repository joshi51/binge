import { inject, injectable } from 'inversify';
import { Symbols } from '../../config/symbols';
import { LoggerServices } from '../../shared/services';
import { LoginServices } from './login.services';
import * as express from 'express';

@injectable()
export class LoginControllers {
    constructor(
        @inject(Symbols.LoginServices) private loginServices: LoginServices,
        @inject(Symbols.LoggerServices) private loggerServices: LoggerServices
    ){}
    loginUser = async (req: express.Request, res: express.Response) => {
        try {
            const userName = req.body.username;
            const password = req.body.password;
            const token = this.loginServices.loginUser(userName, password);
            const user =  this.loginServices.verifyToken(token);
            this.loggerServices.logResponseSent(res, req, user);
        } catch (e) {
            this.loggerServices.logError(res, e)
        }
    }
}
