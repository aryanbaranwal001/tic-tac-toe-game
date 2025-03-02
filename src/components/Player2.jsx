

function Player2({playerColor2}) {

  
  return (
    <>
      <div className={`bg-amber-500  flex flex-col justify-center w-80 h-120 rounded-3xl text-5xl gap-15`}>
        <div className="name flex justify-center">
          PLAYER 2
        </div>
        <div className="flex justify-center">

          <div className={`size-40  ${playerColor2} rounded-[1000px] `}></div>
        </div>
      
      </div>
    </>
  )
}

export default Player2
