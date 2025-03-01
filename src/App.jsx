import { Player1, Player2, Gamearea } from "./components"

function App() {

  
  return (
    <>
      <div className='flex flex-row h-screen bg-gray-700 items-center justify-center gap-70'>
        <Player1 />        
        <Gamearea />        
        <Player2 /> 
      </div>
    </>






  )
}

export default App
