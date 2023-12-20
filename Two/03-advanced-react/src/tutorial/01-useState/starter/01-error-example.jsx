import { useState } from "react";


const ErrorExample = () => {
  let [value, setValue] = useState(0);

  const increase = () => {
    value++;
    setValue(value);
  }
  const decrease = () => {
    value--;
    setValue(value);
  }
  return(
    <div>
      <h1>{value}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default ErrorExample;
