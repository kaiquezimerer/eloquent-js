/*
  Chapter 02 - Program Structure
  Exercise 03 - Chessboard
*/

let size = 8;
let board = "";

for (let row = 0; row < size; row++) {
  for (let col = 0; col < size; col++) {
    if ((col + row) % 2 == 0) board += " ";
    else board += "#";
  }
  board += "\n";
}

console.log(board);
