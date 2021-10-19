/*
  Chapter 09 - Regular Expressions
  Exercise 02 - Quoting style
*/

let text = "'I'm the cook,' he said, 'it's my job.'";
console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2')); // → "I'm the cook," he said, "it's my job."
