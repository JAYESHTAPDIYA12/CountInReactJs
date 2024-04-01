import React, { useState } from "react";

const Click2 = () => {
  const state = useState();
  let [count, setCount] = useState(0);

  const Inc = () => {
    setCount(count++);
  };

  return (
    <div style={{ padding: "15vw", marginLeft: "30vw", marginTop: "5vw" }}>
      <h1>{count}</h1>
      <button onClick={Inc}>Click me</button>
    </div>
  );
};

export default Click2;
