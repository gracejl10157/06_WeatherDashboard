// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
  // split up the words into a list
  var words = str.split(" ");
  // go through the list of words
  words.forEach(function(word, index){
    // make them lowercase
    word.toLowerCase();
    // get the first letter
    // capitalize
    var firstLetter = word[0];
    var restOfWord = word.slice(1);
    firstLetter = firstLetter.toUpperCase();
    words[index] = firstLetter + restOfWord;
    console.log(word)
  });
  // put the words back together
  return words.join(" ");
};
