import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState
  (false);
  const [characterAllowed, setCharacterAllowed] = useState
  (false);
  const [password, setPassword] = useState("")

  const passwordGenerator = () => {}

  return (
    <>
      <h1 className="text-3xl">Password Generator</h1>
    </>
  )
}

export default App
