import React from 'react'

export default function App() 
{
       const students = [
        {name:'Saad', email:'Saad@test.com', contact:888},
        {name:'Waleed', email:'Waleed@test.com', contact:111},
        {name:'Ahmed', email:'Ahmed@test.com', contact:222},
        {name:'Yaqoob', email:'Yaqoob@test.com', contact:333}
       ]
  return (
    <div className = "App">
      <h1>Handle Array with List</h1>
      <table border = "1">
      <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
        {
        students.map((data) =>
        <tr>  
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.contact}</td>
        </tr>
        )
}
      </table>
      
    </div>
  )
}

