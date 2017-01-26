
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/
var hasDoubleLetters = function(strInput){
  var result = false

  for (i = 1; i < strInput.length; i++) {
    var newIndex = i - 1;
    if (strInput[i].toLowerCase() === strInput[newIndex].toLowerCase()) {
      result = true;
    }
  }
    return result;
}

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
