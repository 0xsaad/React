import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const refElement = useRef(" ");
  const [name, setName] = useState("Saad");
  console.log(refElement);
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleInput() {
    refElement.current.style.color = "blue";
    refElement.current.value = "Ali";
  }
  return (
    <>
      <h1>Learning useref</h1>
      <input
        ref={refElement}
        type="Text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>handleInput</button>
    </>
  );
}

export default App;
