"use strict"; //message to compiler

function calculateInterest(letters, format) {
  let dictSize = 0;
  let move = 0;
  let start = 0;
  let dictionary = [];
  let nopts = [];
  nopts[start] = 1;
  let lengthOfWord = format.length;
  let noOfChars = letters.length;
  let word = '';
  let option = [];
  let allWords = [];

  for (let i = 0; i < noOfChars * 2; i++) {
    option[i] = [];
  }

  while (nopts[start] > 0) { 												// while dummy stack is not empty
    if (nopts[move] > 0) {
      move++;
      nopts[move] = 0; 													// initialize position - no initial candidates

      if (move == lengthOfWord + 1) {									// solution found
        for (i = 0; i < lengthOfWord; i++) {
          word += letters[option[i + 1][nopts[i + 1]] - 1].toUpperCase();
        }
        if (!allWords.includes(word)) {
          allWords.push(word);
        }
        word = '';
        // for (i = 0; i < dictSize; i++)
        //   if (!stringComparison(word, dictionary[i]))
        //     printf("%s\n", word);
      }
      else if (move == 1) {											// only case where we'll populate the first position
        for (let candidate = noOfChars; candidate >= 1; candidate--) {
          option[move][++nopts[move]] = candidate;
        }
      }
      else {															// find candidates
        for (let candidate = noOfChars; candidate >= 1; candidate--) {
          for (var i = move - 1; i >= 1; i--)
            if (candidate == option[i][nopts[i]]) break;			// check top of stack of previous positions
          if (!(i >= 1)) {
            option[move][++nopts[move]] = candidate;
          }												// meaning it did not break - candidate is not used by previous positions
        }
      }
    }
    else {																// backtracking step
      move--;															// current position has exhausted candidates so move to previous
      nopts[move]--;													// remove current top on this stack

    }
  }

  // console.log(allWords);
  return allWords;
}
export default calculateInterest;
