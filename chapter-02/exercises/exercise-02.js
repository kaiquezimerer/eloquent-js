/*
  Chapter 02 - Program Structure
  Exercise 02 - FizzBuzz
*/

for (let number = 1; number <= 100; number++) {
  let output = "";
  if (number % 3 == 0) output += "Fizz";
  if (number % 5 == 0) output += "Buzz";
  console.log(output || number);
}
