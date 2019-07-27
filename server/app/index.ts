import * as express from 'express';
import * as http from 'http';
let config = require('./config.json');
const app = express();

app.get('/', (req, res) => {
    res.send('server up')
});

const server = http.createServer(app);

server.listen(config.apiPort, () => {
    console.log('listning to posty')
});