const http = require('http');
const express = require('express');
const RED = require('node-red');

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/",
  httpNodeRoot: "/api",
  userDir: "./.nodered/",
  functionGlobalContext: {}
};

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

const port = process.env.PORT || 1880;
server.listen(port, () => {
  console.log("Node-RED running on port", port);
});

RED.start();
