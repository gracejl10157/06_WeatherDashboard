// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  // var matched = false;
  // // make the string lowercase
  // var strLower = str.toLowerCase();
  // // break up the string into a list of individual characters
  // var charArray = strLower.split('');
  // // go through the list
  // for (let i = 0; i < Math.floor(charArray.length/2); i++) {
  //   // compare the 1st to the last, 2nd to 2nd to last, etc.
  //   if (charArray[i] === charArray[charArray.length - 1 - i]) {
  //     // if they match
  //     matched = true;
  //   } else {
  //     // if not
  //     // return false 
  //     matched = false;
  //   }
  // }
  // return matched;

  str = str.toLowerCase()
  reversedStr = str.split('').reverse().join('');
  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }

};
