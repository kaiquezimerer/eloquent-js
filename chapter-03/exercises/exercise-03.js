/*
  Chapter 03 - Functions
  Exercise 03 - Bean counting
*/

function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) count += 1;
  }
  return count;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC")); // → 2
console.log(countChar("kakkerlak", "k")); // → 4
