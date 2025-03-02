function checkNull(board1) {
  for (let i = 0; i < board1.length; i++) {
    for (let j = 0; j < board1[i].length; j++) {
      if (board1[i][j] === null) {
        return true;
      }
    }
  }
  return false;
}

export default checkNull;
