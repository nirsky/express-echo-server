# 🔊 express-echo-server

A simple echo server, useful to for debugging 🐛

## Install

Clone this repo to your machine and run `yarn` to install dependencies.

## Start

run `yarn start` to get the server running in watch mode.  
The server will start at port `1020`.

To start with a different port, use the `PORT` env param:

```sh
PORT=3000 yarn start
```

## Methods

The server will expose the following HTTP methods:  
GET, POST, PUT, PATH, DELETE, COPY, HEAD, OPTIONS, PURGE, LOCK, UNLOCK, PROPFIND.

The server will log to the console each incoming request in a pretty and readable manner.

## Example

![image](https://user-images.githubusercontent.com/16322616/90976566-e32bee80-e546-11ea-95bf-c933162aaa8f.png)
