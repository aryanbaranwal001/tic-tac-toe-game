import { boardData, cellData } from "../../public"

function Gamearea() {
  


  const clicked = () => {
      console.log("clicked")
  }
  const buttons = Object.values(cellData).map(cell =>{

    // if (cell.cellid === 11){
      return (
    <div class="relative bg-gray-700 w-32 h-32 flex items-center justify-center">
        <div class="absolute w-36 h-[10px] bg-amber-400 rotate-45"></div>
        <div class="absolute w-36 h-[10px] bg-amber-400 -rotate-45"></div>
    </div>

      )
    // } else {

    //   return (
    //     <button key={cell.cellid} disabled={cell.status} onClick={clicked} className="bg-gray-700 flex h-32 w-32 cursor-pointer"></button> 
    //   )
    // }
  })

  console.log(buttons)
  
  return (
    <>
      <div className='grid grid-cols-3 bg-amber-400 gap-[9px]'>
        {buttons}
      </div>   



    <div class="relative w-32 h-32 flex items-center justify-center">
        <div class="absolute w-36 h-[10px] bg-amber-400 rotate-45"></div>
        <div class="absolute w-36 h-[10px] bg-amber-400 -rotate-45"></div>
    </div>
      



    </>
    )
}

export default Gamearea
