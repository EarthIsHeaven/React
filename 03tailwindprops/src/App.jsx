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
      <h1 className='bg-green-500 p-4 rounded-xl mb-4'>Tailwind</h1>
      <Card username="Thinley" job="Engineer" location="California" someObj={myObj}/>
      <Card username="Don" job="Doctor" location="Kathmandu"/>
    </>
  )
}

export default App
