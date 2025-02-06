import './App.css';
import React, {useState , useMemo} from "react"; 

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setminus] = useState(100)

  const MPO = useMemo(function multiply(){
    console.log("******************")
    return add * 10
  },[add])
  return (
    <div className="App">
      <h1>Learning useMemo</h1>
      {MPO} <br/>
      <button onClick={() => setAdd(add + 1)} > Addition </button>
      <span>{add}</span>
      <button onClick={() => setminus(minus - 1)} > Subtraction </button>
      <span>{minus}</span>
    </div>
  );
}

export default App;
