import { useState } from 'react';

const UseStateObject = () => {
  
  const [person, setPerson] = useState({
    name: "James",
    age: 22,
    hobby: "Dancing"
  })

  let Change = ()=> {
    setPerson({
      ...person,
      name: "Thinley"
    })
  }

  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>{person.hobby}</h4>

      <button onClick={Change}>Show Ram</button>
    </div>
  )
};

export default UseStateObject;
