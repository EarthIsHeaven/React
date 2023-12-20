import { useState } from 'react';

const UseStateObject = () => {
  const data = [
    {
      name: "Thinley",
      age: 19,
      hobby: "Coding"
    },
    {
      name: "James",
      age: 33,
      hobby: "Basketball"
    },
    {
      name: "Steph",
      age: 30,
      hobby: "Dancing"
    }
  ]
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
