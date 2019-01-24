import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import router from './echo-route';

const app = express()
    .disable('x-powered-by')
    .use(bodyParser.json({limit: '1mb'}))
    .use(bodyParser.urlencoded({ extended: false }))
    .use(compression())
    .use(cors())
    .options('*', cors())
    .use(router);

const PORT = 1020;

const routeToMethod = (route: any) => Object.keys(route.methods)[0].toLocaleUpperCase();

app.listen(PORT, () => console.log(`Echo server started on port ${PORT}.\nTest at http://localhost:${PORT}
\nAvailable Routes: ${router.stack.map(entry => `\n 🔥 ${routeToMethod(entry.route)}: ${entry.route.path}`)}`))