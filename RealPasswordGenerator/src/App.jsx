import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {  //The useCallback Hook only runs when one of its dependencies update.

    let words = ["Homee", "Argue", "Beach", "Above", "Alike", "Arise", "Begin", "clean", "Dealt", "Guide", "Human", "Movie", "Tired", "Legal", "Round", "Shall", "Usage", "Woman", "Vital", "Sorry", "Upset", "Faith"];
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    let remain = length-5;
    for(let i=1;i<=remain;i++){
      let randomNum = Math.floor(Math.random() * 10);
      randomWord+=randomNum;
    }
    setPassword(randomWord);
    
  }, [length, setPassword]
  )

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() //for select effect
    //passwordRef.current?.setSelectionRange(0,9); //only select 9 char
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length,
  passwordGenerator]
  )

  return (
      <div className="w-full max-w-md mx-auton shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center">Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly 
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white
          px-3 py0.5 shrink-0">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">

          <div className="flex items-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

        </div>

      </div>
   
  )
}

export default App
