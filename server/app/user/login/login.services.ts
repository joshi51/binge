import { inject, injectable } from 'inversify';
import { Symbols } from '../../config/symbols';
import {sign, verify} from 'jsonwebtoken'

@injectable()
export class LoginServices {
    public loginUser(userName: string, password: string) {
        return sign({userName, password}, 'keepSecret');
    }
    public verifyToken(token: string) {
        return verify(token, 'keepSecret')
    }
}
