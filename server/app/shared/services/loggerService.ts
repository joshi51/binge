import { injectable } from 'inversify';
import { createLogger, transports } from 'winston';
import {get} from 'lodash';

@injectable()
export class LoggerService {
    constructor(){}
    public logger() {
        return createLogger({transports: [
                             new transports.Console(),
                             new transports.File({filename: 'application-logs.log'})]
        });
    }
    public logError(response: any, error: any) {
        this.logger().error(error.stack);
        response.send({status: get(error, 'status', 400), message: get(error, 'message', 'Internal Server error')})
    }
}
