import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  const changeColor=()=>{
    console.log("1");
    color= "red";

    setCounter(color);
    }

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className="fixed flex flex-wrap
    justify-center bottom-12 inset-x-0">
      <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white rounded-3xl py-3 px-10">
        <button className="p-3 rounded-2xl " style={{backgroundColor: "red"}}>Red</button>
        <button className="p-3 rounded-2xl " style={{backgroundColor: "green"}}>Green</button>
        <button className="p-3 rounded-2xl " style={{backgroundColor: "blue"}}>Blue</button>
      </div>
    </div>
    </div>
  )
}

export default App
