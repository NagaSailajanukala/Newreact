import React from 'react'

function HookCounter() {
 const [count,setCount]=useState(0);
 const increment=()=>setCount(count+1);
 const decrement=()=>setCount(count-1);
    return (
    <div>
        <p>count: {count}</p>
     <button onClick={increment}>Increment </button>
     <button onClick={decrement}>Dectrement</button>
    </div>
  )
}
export default HookCounter;

