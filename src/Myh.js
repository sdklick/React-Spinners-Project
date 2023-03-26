import React, { useState, useRef } from "react";

const Myh = () => {
  const [set, setItem] = useState(null);

  const cange = useRef(null);

  const clickchange = () => {
    setItem(cange.current.value);
  };

  return (
    <>
      <select ref={cange}>
        <option value='Red'>Red</option>
        <option value='Green'>Green</option>
        <option value='Blue'>Blue</option>
      </select>
      <button onClick={clickchange}>Click me</button>
      <pre>You are Chose : {set}</pre>
    </>
  );
};

export default Myh;
