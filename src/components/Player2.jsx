function Player2({ playerColor2 }) {
  return (
    <>
      <div className="flex flex-col items-center ml-[-90px] justify-center">
        <div
          className={`bg-amber-500 flex flex-col justify-center w-75 h-90 rounded-3xl text-5xl gap-10`}
        >
          <div className="name flex justify-center">PLAYER 2</div>
          <div className="flex justify-center">
            <div className={`size-40 ${playerColor2} rounded-[1000px] `}></div>
          </div>
        </div>

        <div className=" p-8 bg-gray-700 flex h-40 w-40">
          <div className="flex border-[5px] bg-gray-700 border-amber-400 rounded-full w-full h-full"></div>
        </div>
      </div>
    </>
  );
}

export default Player2;
