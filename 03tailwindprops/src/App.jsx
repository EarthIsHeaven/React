import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    name: 'Don',
    age: '11'
  }

  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-xl'>Tailwind</h1>
      <Card channel="Thinley" someObj={myObj}/>
      <Card />
    </>
  )
}

export default App
