import React, { useEffect, useState  } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Tou Clicked ${count} times`
    })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> CLICK {count} times</button>
    </div>
  )
}

export default HookCounterOne
