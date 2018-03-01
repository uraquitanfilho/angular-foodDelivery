import * as jsonServer from 'json-server';
import { Express } from 'express';

import * as fs from 'fs';
import * as https from 'https';
import { handleAuthentication } from './auth'; 
import { handleAuthorization } from './authz'; 

const server: Express = jsonServer.create();

const router = jsonServer.router('../db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(jsonServer.bodyParser)
//middleware para login
server.post('/login', handleAuthentication);
//using .use will work to all method. get/post/delete/update... 
server.use('/orders', handleAuthorization);
// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('./keys/cert.pem'),
  key: fs.readFileSync('./keys/key.pem')
}

https.createServer(options, server).listen(3001, () => {
  console.log('JSON Server is running')
})