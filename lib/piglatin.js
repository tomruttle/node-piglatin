'use strict';

var isString = function (text) {
  return typeof text === 'string' || text instanceof String;
};

// @todo: non-english characters?
var isAllLetters = function (word) {
  return word.match(/^[a-z]+$/i);
};

// @todo: any situations in which 'y' starts a word with a vowel sound?
var isVowel = function (letter) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) >= 0;
};

// Find the index of the first vowel
// Recursive for fun.
var firstVowel = function (index, word) {
  if (isVowel(word[index]) || index >= word.length) {
    return index;
  }
  return firstVowel(++index, word);
};

module.exports = function (word) {

  if (!word || !isString(word)) {
    return false;
  }

  if (!isAllLetters(word)) {
    return false;
  }

  // @todo: preserve case?
  var lcWord = word.toLowerCase();

  // @todo: how to detect silent consonents?
  var splitPoint = firstVowel(0, lcWord);

  switch (splitPoint) {

    // If the first letter is a vowel
    case 0:
      return lcWord + 'way';

    // If the word contains no vowels, return the word.
    case word.length:
      return lcWord;

    // Return the pig latin
    default:
      var beforeFirstVowel = lcWord.slice(0, splitPoint);
      var afterFirstVowel = lcWord.slice(splitPoint);
      return afterFirstVowel + beforeFirstVowel + 'ay';

  }

};
