/*global describe, it, after, before, afterEach, beforeEach*/
/*jshint expr:true*/
/*jshint unused:false*/

'use strict';

var pigLatin = require('../lib/piglatin.js');
var should = require('should');

describe('Pig Latin', function () {

  it('should not fail when incorrect values are sent', function (done) {
    pigLatin('').should.eql('');
    pigLatin(123).should.eql('');
    pigLatin(false).should.eql('');
    pigLatin(true).should.eql('');
    pigLatin('123').should.eql('123');
    pigLatin('test123').should.eql('test123');
    pigLatin({}).should.eql('');
    pigLatin({fail: '123'}).should.eql('');
    return done();
  });

  it('converts consonent-starting words', function (done) {
    pigLatin('pig').should.eql('igpay');
    pigLatin('banana').should.eql('ananabay');
    pigLatin('trash').should.eql('ashtray');
    pigLatin('happy').should.eql('appyhay');
    pigLatin('duck').should.eql('uckday');
    pigLatin('glove').should.eql('oveglay');
    return done();
  });

  it('converts vowel-starting words', function (done) {
    pigLatin('egg').should.eql('eggway');
    pigLatin('inbox').should.eql('inboxway');
    pigLatin('eight').should.eql('eightway');
    return done();
  });

  it('converts potential-gotcha words', function (done) {
    pigLatin('TEST').should.eql('esttay');
    pigLatin('false').should.eql('alsefay');
    pigLatin('true').should.eql('uetray');
    pigLatin('rhythm').should.eql('rhythm');
    pigLatin('the').should.eql('ethay');
    return done();
  });

  it('converts sentences', function (done) {
    pigLatin('Hello World').should.eql('ellohay orldway');
    return done();
  })

});
