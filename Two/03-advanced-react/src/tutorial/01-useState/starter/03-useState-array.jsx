import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  let [value, setValue] = useState(data);

  const remove = (id) => {
    let eliminate = value.filter((single)=> single.id !== id);
    setValue(eliminate);
  }

  return(
    <div>
      {
        value.map((person)=> {
          const {id, name} = person;
          return(
            <div key={id}>
              <h2>{name}</h2>
              <button onClick={() => remove(id)}>remove</button>
            </div>
          )
        })
      }
      <div>
        <button onClick={()=>setValue([])}>Clear All</button>
      </div>
    </div>
  )
};

export default UseStateArray;
