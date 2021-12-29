function frequencyCounter(word) {
  // Insert code here;
  // create empty object
  var count = { };

   //loop through every letter in the string
  for( var i = 0; i < word.length; i++){
    var currentLetter = word.charAt(i);
    // If the letter is a key inside the object
    if(count[currentLetter]){
      //Add 1 to the counter
      count[currentLetter]++;
    }else{
      count[currentLetter] =1;
    }
  }

  return count;

}

// Do not edit this line;
module.exports = frequencyCounter;