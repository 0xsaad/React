import { useState, useEffect, React } from "react";

function App1() {
  const [count, setCounter] = useState(0);
  const [data, setData] = useState("Saad");

  useEffect(() => {
    console.log("Component Mounted");
  }, [data ]);

  function updateCount() {
    setCounter(count + 1);
  }

  function updateData() {
    setData("Farzan");
  }

  return (
    <div>
      <>
        <h1>Button Clicked {count} times</h1>

        <button onClick={updateCount}>CLICK</button>
        <button onClick={updateData}>UPDATE DATA</button>
      </>
    </div>
  );
}

export default App1;
