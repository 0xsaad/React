// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [newItem, setNewItem] = useState("");
//   const [items, setItems] = useState([]);

//   function addItems() {
//     if (!newItem) {
//       alert("Enter an item.");
//       return;
//     }

//     const item = {
//       id: Math.floor(Math.random() * 1000),
//       value: newItem,
//     };

//     setItems((oldList) => [...oldList, item]);
//     setNewItem("");
//   }

//   function deleteItem(id) {
//     const newArray = items.filter( item => item.id !== id);
//     setItems(newArray);
//   }

//   return (
//     <div className="App">
//       <h1>TODO LIST</h1>

//       <input
//         type="text"
//         placeholder=" Add Items ..."
//         value={newItem}
//         onChange={(e) => setNewItem(e.target.value)}
//       />

//       <button onClick={() => addItems()}> Add </button>

//       <ul>
//         {items.map((item) => {
//           return (

//             <li key={item.id} >
//               {item.value}
//               <button onClick={() => deleteItem(item.id)}> DELETE</button>

//             </li>

//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
></link>;

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
  crossorigin="anonymous"
></script>;

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [editItemId, setEditItemId] = useState(null);

  function addItems() {
    if (!newItem) {
      alert("Enter an item.");
      return;
    }

    if (editItemId !== null) {
      // If editItemId is not null, update the existing item
      const updatedItems = items.map((item) =>
        item.id === editItemId ? { ...item, value: newItem } : item
      );
      setItems(updatedItems);
      setEditItemId(null);
    } else {
      // If editItemId is null, add a new item
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem,
      };
      setItems((oldList) => [...oldList, item]);
    }

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function editItem(id) {
    // Set the editItemId to the id of the item to be edited
    const itemToEdit = items.find((item) => item.id === id);
    setNewItem(itemToEdit.value);
    setEditItemId(id);
  }

  return (
    <div className="App">
      <h1>TODO LIST  📝  </h1>

      <input
        type="text"
        placeholder=" Add Items ..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button id="1"  onClick={() => addItems()}>
        {" "}
        {editItemId !== null ? "🔄" : "+"}{" "}
      </button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="text"
                class="form-control"
                // id="formGroupExampleInput"
                placeholder={item.value}
              ></input>
              {/* {item.value} */}
              <button id="2"   onClick={() => deleteItem(item.id)}> 🗑️ </button>
              <button id="3"    onClick={() => editItem(item.id)}> 🔄 </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
