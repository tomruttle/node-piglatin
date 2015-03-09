/*global describe, it, after, before, afterEach, beforeEach*/
/*jshint expr:true*/
/*jshint unused:false*/

'use strict';

var app = require('../index.js');
var should = require('should');
var request = require('supertest');

describe('Pig Latin API', function () {

  describe('/health endpoint', function () {

    it('responds with "OK" and a 200', function (done) {
      request(app)
        .get('/health')
        .expect('Content-Type', /plain/)
        .expect('OK')
        .expect(200, done);
    });

  });

  describe('/convert endpoint', function () {

    it('responds with JSON and a 400', function (done) {
      request(app)
        .get('/convert')
        .expect(400, done);
    });

  })

  describe('/convert/:word endpoint', function () {

    it('responds with JSON and a 200, and a pig latin word', function (done) {
      request(app)
        .get('/convert/banana')
        .expect('Content-Type', /plain/)
        .expect('ananabay')
        .expect(200, done);
    });

    it('responds with JSON and a 400 if an invalid word is sent', function (done) {
      request(app)
        .get('/convert/banana123')
        .expect(400, done);
    });

  });

});
