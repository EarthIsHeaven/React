import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {  //The useCallback Hook only runs when one of its dependencies update.

    let words = ["Civil","Worse","Video","Young","Which","Delay","Group","Forth","Entry","Carry","Brain", "Crash","Homee", "Argue", "Beach", "Above", "Bases","Alike", "Arise", "Begin", "clean", "Dealt", "Guide", "Human", "Movie", "Tired", "Legal", "Round", "Shall", "Usage", "Woman", "Vital", "Sorry", "Upset", "Faith"];
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];

    //Symbol
    let randomSymbol = "";
    let Symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "<", ","];
    for(let i=1;i<=2;i++){
      let randomSymbolIndex = Math.floor(Math.random() * Symbols.length);
      randomSymbol = Symbols[randomSymbolIndex];
      randomWord+=randomSymbol;
    }

    //Number
    let remain = length-7;
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
      <div className="w-full max-w-md mx-auton shadow-md rounded-lg px-10 py-10 my-8 bg-gray-700 text-green-500">
        <h1 className="text-white text-2xl text-center mb-5">Password generator</h1>

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
            min={8}
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

