console.log(
  "Task 3 ------------------------------------------------------------"
);

function findLongestWord(string = "") {
  let allWords = string.split(" ");
  let longestWord = allWords[0];

  for (let i = 1; i < allWords.length; i += 1) {
    if (longestWord.length < allWords[i].length) {
      longestWord = allWords[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
