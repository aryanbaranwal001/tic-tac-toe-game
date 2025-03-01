import { boardData, cellData } from "../../public"
import { useState } from "react"
import { useEffect } from "react";


function Gamearea() {
  let player = ""
  const [layoutComponents, setLayoutComponents] = useState([]);
  let myCellData = cellData;
  useEffect(()=>{
    const layout = Object.values(cellData).map(cell =>{
      const value1 = (
        <button key={cell.cellid}  onClick={() => handleClick(cell.cellid)} className="bg-gray-700 flex h-32 w-32 cursor-pointer"></button> 
      );
      myCellData[cell.cellid].value = (value1)
      
        return (
          value1
        )

      })
      setLayoutComponents(() =>{
        return layout
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
      player="PlayerX"
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    
    
    
    function handleClick(cellid1) {
      let value1 = null;
      let cellIdUpdate = null;
      const layoutTemp = Object.values(myCellData).map(cell =>{
        
        
        if (cell.cellid === cellid1 && player==="PlayerX") {
          cellIdUpdate = cell.cellid
          player = "PlayerO"
          value1 = (
            <div class="relative w-32 h-32 flex items-center justify-center bg-gray-700">
          <div class="absolute w-36 h-[10px] bg-amber-400 rotate-45"></div>
          <div class="absolute w-36 h-[10px] bg-amber-400 -rotate-45"></div>
        </div>      
      );
      return value1
    } else if (cell.cellid === cellid1 && player==="PlayerO") {
      cellIdUpdate = cell.cellid
      player = "PlayerX"
      value1 = (
        <div className="box-border p-3 bg-gray-700 flex h-32 w-32">
          <div class="flex border-[10px] bg-gray-700 border-amber-400 rounded-full w-full h-full"></div>
        </div>       
      );
      return value1
    } else {
      return (
        myCellData[cell.cellid].value
      )
    }
    
  })
  
  myCellData[cellIdUpdate].value = value1;
  
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
