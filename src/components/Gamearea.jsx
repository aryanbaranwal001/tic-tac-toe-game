import { boardData, cellData } from "../../public";
import { useState, useEffect } from "react";
import { updateBoard, WinCheck, checkNull } from "../logics";
import { Player1, Player2 } from "./";

function Gamearea() {
  let player = "";
  const [layoutComponents, setLayoutComponents] = useState([]);
  const [playersColorState, setplayersColorState] = useState({
    player1color: "bg-green-700",
    player2color: "bg-red-700",
  });
  let myCellData = cellData;
  let myBoardData = boardData;
  useEffect(() => {
    //setting up layout array for initial tictacto grip
    const layout = Object.values(cellData).map((cell) => {
      const value1 = (
        <button
          key={cell.cellid}
          onClick={() => handleMove(cell.cellid, cell.position)}
          className="bg-gray-700 flex h-40 w-40 cursor-pointer"
        ></button>
      );
      myCellData[cell.cellid].value = value1;
      return value1;
    });

    setLayoutComponents(() => {
      return layout;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    player = "PlayerX";
  }, []);

  /// handle win function
  const handleWin = (cellData1) => {
    //reset mycelldata and update the grid

    const layout1 = Object.values(cellData1).map((cell) => {
      const value1 = (
        <button
          key={cell.cellid}
          onClick={() => handleMove(cell.cellid, cell.position)}
          className="bg-gray-700 flex h-40 w-40 cursor-pointer"
        ></button>
      );
      myCellData[cell.cellid].value = value1;
      return value1;
    });

    //updating the board
    myBoardData = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    player = "PlayerX";

    //resetting the player colors
    setplayersColorState({
      player1color: "bg-green-700",
      player2color: "bg-red-700",
    });    

    return layout1;
  };

  function handleMove(cellid1, position1) {
    let value1 = null;
    let cellIdUpdate = null;
    const layoutTemp = Object.values(myCellData).map((cell) => {
      if (cell.cellid === cellid1 && player === "PlayerX") {
        updateBoard(myBoardData, position1, 1);

        cellIdUpdate = cell.cellid;
        player = "PlayerO";
        playerColorHandler(player);
        value1 = (
          <div
            key={cell.cellid}
            className="relative w-40 h-40 flex items-center justify-center bg-gray-700"
          >
            <div className="absolute w-38 h-[10px] bg-amber-400 rotate-45"></div>
            <div className="absolute w-38 h-[10px] bg-amber-400 -rotate-45"></div>
          </div>
        );
        return value1;
      } else if (cell.cellid === cellid1 && player === "PlayerO") {
        updateBoard(myBoardData, position1, 0);
        cellIdUpdate = cell.cellid;
        player = "PlayerX";
        playerColorHandler(player);
        value1 = (
          <div key={cell.cellid} className=" p-4 bg-gray-700 flex h-40 w-40">
            <div className="flex border-[9px] bg-gray-700 border-amber-400 rounded-full w-full h-full"></div>
          </div>
        );
        return value1;
      } else {
        return myCellData[cell.cellid].value;
      }
    });

    myCellData[cellIdUpdate].value = value1;

    setLayoutComponents(layoutTemp);

    const winChecktOutput = WinCheck(myBoardData);
    /// checking for win
    if (winChecktOutput) {
      setTimeout(() => {
        /// couldn't do current player thing. Will check later
        if (player === "PlayerX") {
          alert("Player 2 Won");
        } else if (player === "PlayerO") {
          alert("Player 1 Won");
        }
      }, 80);
      setTimeout(() => {
        setLayoutComponents(handleWin(cellData));
      }, 1000);
    } else if (!winChecktOutput && !checkNull(myBoardData)) {
      setTimeout(() => {
        alert("There Was No Winner");
      }, 80);
      setTimeout(() => {
        // updating board data
        myBoardData = [
          [null, null, null],
          [null, null, null],
          [null, null, null],
        ];
        // updating grid
        const layout1 = Object.values(cellData).map((cell) => {
          const value1 = (
            <button
              key={cell.cellid}
              onClick={() => handleMove(cell.cellid, cell.position)}
              className="bg-gray-700 flex h-40 w-40 cursor-pointer"
            ></button>
          );
          myCellData[cell.cellid].value = value1;
          return value1;
        });

        setLayoutComponents(layout1);
      }, 1000);
    }
  }

  function playerColorHandler(player1) {
    if (player1 === "PlayerO") {
      setplayersColorState({
          player1color: "bg-red-700",
          player2color: "bg-green-700",
        });
    } else if (player1 === "PlayerX") {
      setplayersColorState({
        player1color: "bg-green-700",
        player2color: "bg-red-700",
      });

    }
  }

  // return the final tictactoe grid
  return (
    <>
      <Player1 playerColor1={playersColorState.player1color} />

      <div className="grid grid-cols-3 bg-amber-400 gap-[9px]">
        {layoutComponents}
      </div>

      <Player2 playerColor2={playersColorState.player2color} />
    </>
  );
}

export default Gamearea;
