import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = ()=>{
    setValue((currentState)=>{
      const newState = currentState + 1;
      return newState;
    });
    // setValue(value + 1);
    // console.log(value);
  }

  //setTimeout concept

  // const handleClick = () => {
  //   setTimeout(()=>{
  //     console.log("Clicked");
  //     setValue((currentState)=>{
  //       return currentState + 1;
  //     });
  //   }, 3000);
  // }
  return(
    <div>
      <h1>{value}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
};

export default UseStateGotcha;
