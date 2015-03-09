'use strict';

var restify = require('restify');

var server = restify.createServer();

server.get('/health', function (req, res, next) {
  res.json(200, 'OK');
  return next();
});

server.listen(3000);
