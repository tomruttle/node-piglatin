'use strict';

var restify = require('restify');

var pigLatin = require('yapiglatin').changePhrase;

var server = restify.createServer();

server.use(restify.CORS());
server.use(restify.fullResponse());

server.get('/health', function (req, res, next) {
  res.setHeader('content-type', 'text/plain');
  res.send(200, 'OK');
  return next();
});

server.get('/convert', function (req, res, next) {
  return next(new restify.InvalidContentError('Please supply a word to be converted.'));
});

server.get('/convert/:word', function (req, res, next) {

  var word = req.params.word;

  var plWord = pigLatin(word);

  if (plWord === false) {
    return next(new restify.InvalidContentError('Invalid word supplied: ' + word));
  }

  res.setHeader('content-type', 'text/plain');
  res.send(200, plWord);
  return next();

});

server.listen(3000);

module.exports = server;
