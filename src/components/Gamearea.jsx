import { boardData, cellData } from "../../public"
import { useState } from "react"
import { useEffect } from "react";


function Gamearea() {
  const [layoutComponents, setLayoutComponents] = useState(null);
  const 

  useEffect(()=>{
    const layout = Object.values(cellData).map(cell =>{
        return (
          <button key={cell.cellid} disabled={cell.status} onClick={() => handleClick(cell.cellid)} className="bg-gray-700 flex h-32 w-32 cursor-pointer"></button> 
        )
      })
      setLayoutComponents(() =>{
        return layout
      })
  }, [])



function handleClick(cellid) {
  Object.values(layoutComponents).map(cell =>{
    return (
      <button key={cell.cellid} disabled={cell.status} onClick={() => handleClick(cell.cellid)} className="bg-gray-700 flex h-32 w-32 cursor-pointer"></button> 
    )
  })



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
