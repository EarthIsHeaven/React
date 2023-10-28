import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15;

  const addValue=()=>{
    counter = counter + 1;
    console.log("value added", counter);
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}
      </button>
      <br />
      
      <button>remove value {counter}</button>
    </>
  )
}

export default App
