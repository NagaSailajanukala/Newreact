import React ,{ useState } from 'react'

function hookCounterPrev() {
    const initialCount=0;
    const [count,setCount]=useState(initialCount);
    const increment=()=>{
        for(let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1);
        }
    }
  return (
    <div>
        <p>count:{count}</p>
      <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>

      <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
      <button onClick={increment}>increment by 5</button>
      <button onClick={()=>setCount(initialCount)}>Reset</button>
    </div>
  )
}

export default hookCounterPrev
