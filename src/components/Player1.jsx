function Player1({ playerColor1 }) {
  return (
    <>
      <div className="flex flex-col items-center mr-[-90px] justify-center">
        <div
          className={`bg-amber-500 flex flex-col justify-center w-75 h-90 rounded-3xl text-5xl gap-10`}
        >
          <div className="name flex justify-center">PLAYER 1</div>
          <div className="flex justify-center">
            <div className={`size-40 ${playerColor1} rounded-[1000px] `}></div>
          </div>
        </div>

        <div className="relative w-40 h-40 flex items-center justify-center bg-gray-700">
          <div className="absolute w-26 h-[6px] bg-amber-400 rotate-45"></div>
          <div className="absolute w-26 h-[6px] bg-amber-400 -rotate-45"></div>
        </div>
      </div>
    </>
  );
}

export default Player1;
