function updateBoard(board1, position2, value) {
  board1[position2.row - 1][position2.col - 1] = value; 
  console.log(board1)
}

export default updateBoard