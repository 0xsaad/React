import './App.css';
import React from 'react'
import User from './User'
function App() {
  const users = [
    {
      name: 'Anil', email: 'anil@test.com', contact:"111"
    },
    {
      name: 'Burce', email: 'bruce@test.com',contact:"111"
    },
    {
      name: 'Peter', email: 'peter@test.com',contact:"111"
    },
    {
      name: 'Sam', email: 'sam@test.com', contact:"111"
    },
  ]
  return (
    <div className="App">
      <h1>Reuse component with List</h1>
      {
        users.map((item,) => 
        <User data = {item} />
        )
      }
    </div>
  );
}

export default App;


