/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

var findLongestWord = function (strInput){
  var longestWord = '';
  var wordsArray = strInput.split(' ')

  for (var i=0; i < wordsArray.length; i++) {
    allWords = removeApost(wordsArray[i])
    if (allWords.length > longestWord.length) {
      longestWord = allWords;
    }
  }
  return longestWord;
}
var removeApost = function(str){
  var newString = ''
  for (var i=0; i < str.length; i++) {
    if (str[i] === "'"){

    }else {
     newString = newString + str[i]
    }
  }



  return newString
}








console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
