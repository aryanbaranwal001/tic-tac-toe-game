import { boardData, cellData } from "../../public"
import { useState } from "react"
import { useEffect } from "react";


function Gamearea() {
  let player = ""
  const [layoutComponents, setLayoutComponents] = useState([]);
  const [layoutData, setLayoutData] = useState(cellData);

  useEffect(()=>{
    const layout = Object.values(cellData).map(cell =>{
        return (
          <button key={cell.cellid}  onClick={() => handleClick(cell.cellid)} className="bg-gray-700 flex h-32 w-32 cursor-pointer"></button> 
        )
      })
      setLayoutComponents(() =>{
        return layout
      })
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      player="PlayerX"
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    
function handleClick(cellid) {
  console.log(cellid, player)
  const layoutTemp = Object.values(cellData).map(cell =>{

    if (cell.cellid === cellid && player==="PlayerX") {
      player = "PlayerO"
      return (
        <div class="relative w-32 h-32 flex items-center justify-center bg-gray-700">
          <div class="absolute w-36 h-[10px] bg-amber-400 rotate-45"></div>
          <div class="absolute w-36 h-[10px] bg-amber-400 -rotate-45"></div>
        </div>        
      )
    } else if (cell.cellid === cellid && player==="PlayerO") {
      player = "PlayerX"
      return (
        <div className="box-border p-3 bg-gray-700 flex h-32 w-32">
          <div class="flex border-[10px] bg-gray-700 border-amber-400 rounded-full w-full h-full"></div>
        </div>        
      )
    } else {
      return (
        <button key={cell.cellid} onClick={() => handleClick(cell.cellid)} className="bg-gray-700 flex h-32 w-32 cursor-pointer"></button> 
      )
    }
    
  })


console.log(layoutTemp)

setLayoutComponents(layoutTemp)
}




  
  return (
    <>
      <div className='grid grid-cols-3 bg-amber-400 gap-[9px]'>
        {layoutComponents}
      </div>   
    </>
    )
}

export default Gamearea
