import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  // useReducer hook ka istemal
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Barhao</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Kam Karo</button>
    </div>
  );
}

// // Ab Counter component ko use karen
// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }
