
function rowCheck(board1) {
  let checkArray = [null, null, null];
  console.log("rowcheck");
  for (let i = 0; i < board1.length; i++) {
    for (let j = 0; j < board1[0].length; j++) {
      if (board1[i][j] === null) {
        continue;
      }
      checkArray[j] = board1[i][j];
    }
    if (
      checkArray[0] !== null &&
      checkArray[1] !== null &&
      checkArray[2] !== null
    ) {
      if (
        checkArray[0] === checkArray[1] &&
        checkArray[1] === checkArray[2]
      ) {
        return true;
      }
    }
    checkArray = [null, null, null];
  }
  return false;
}
function colCheck(board1) {
  let checkArray = [null, null, null];
  console.log("colcheck");

  for (let i = 0; i < board1[0].length; i++) {
    for (let j = 0; j < board1.length; j++) {
      if (board1[j][i] !== null) {
        checkArray[j] = board1[j][i];
      }
    }

    if (
      checkArray[0] !== null &&
      checkArray[1] !== null &&
      checkArray[2] !== null
    ) {
      if (
        checkArray[0] === checkArray[1] &&
        checkArray[1] === checkArray[2]
      ) {
        return true;
      }
    }

    checkArray = [null, null, null];
  }
  return false;
}
function diaCheck(board1) {
  let checkArray1 = [null, null, null];
  let checkArray2 = [null, null, null];
  console.log("diacheck");
  
  for (let i = 0; i < board1[0].length; i++) {
    if (board1[i][i] !== null) {
      checkArray1[i] = board1[i][i];
    }
    if (board1[i][2 - i] !== null) {
      checkArray2[i] = board1[i][2 - i];
    }
    
  }
  return CheckArrayChecker(checkArray1) || CheckArrayChecker(checkArray2);
}
function CheckArrayChecker(Array) {
  if (Array[0] !== null && Array[1] !== null && Array[2] !== null) {
    if (Array[0] === Array[1] && Array[1] === Array[2]) {
      return true;
    }
  }
  Array = [null, null, null];
}

function WinCheck(board2) {
  if (diaCheck(board2) || colCheck(board2) || rowCheck(board2)) {
    return true;
  }
  return false;
}

export default WinCheck;