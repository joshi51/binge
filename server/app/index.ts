import container from "./config/inversify.config";
import * as express from 'express';
import * as http from 'http';
let config = require('./config.json');
const cors = require('cors');
const cookieParser = require('cookie-parser');

import {Bootstrap} from "./bootstrap";
import {Symbols} from "./config/symbols";
const bootstrap = container.get<Bootstrap>(Symbols.Bootstrap);

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.options('*', cors());
app.use(cookieParser());

try {
    bootstrap.init(app);
} catch (error) {
    console.log('ApplicationError', error, { message: 'An error occurred while bootstrapping' }, 'do-api');
}

app.get('/', (req, res) => {
    res.send('Welcome to binge API')
});

const server = http.createServer(app);

server.listen(config.apiPort, () => {
    console.log(`listning to ${config.apiPort}`)
});