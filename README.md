# express-echo-server
A simple echo server, useful to for debugging

### • Build
run `npm install` to install dependencies.  
run `npm build` to build once, or `npm build:watch` to build in watch mode.

### • Start Server
run `npm start` to get the server running, or `npm start:watch` to start in watch mode.  
The server will start at port 1020.

### • Methods

The server will expose the following HTTP methods:  
GET, POST, PUT, PATH, DELETE, COPY, HEAD, OPTIONS, PURGE, LOCK, UNLOCK, PROPFIND.

The server will log to the console each incoming request in a pretty and readable manner.