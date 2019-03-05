import React, { useState } from 'react'

export default function Counter(props) {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{props.name}: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Vote {props.name}
      </button>
    </div>
  )
}
