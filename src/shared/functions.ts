const nodeEnv = process.env.NODE_ENV;
import {ConfigValues} from '../config';
import * as configJson from '../config.json';

export function config(): ConfigValues {
    switch(nodeEnv) {
        case 'production':
            return configJson.production;
        default :
            return configJson.development;
    }
}
