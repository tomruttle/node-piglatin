/*global describe, it, after, before, afterEach, beforeEach*/
/*jshint expr:true*/
/*jshint unused:false*/

'use strict';

var pigLatin = require('../lib/piglatin.js');
var should = require('should');

describe('Pig Latin', function () {

  it('should not fail when incorrect values are sent', function (done) {
    pigLatin('').should.eql(false);
    pigLatin(123).should.eql(false);
    pigLatin(false).should.eql(false);
    pigLatin(true).should.eql(false);
    pigLatin('123').should.eql(false);
    pigLatin('test123').should.eql(false);
    pigLatin({}).should.eql(false);
    pigLatin({fail: '123'}).should.eql(false);
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

});
