import React ,{ useState , useEffect } from 'react';

function HookCounter() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');

    useEffect(()=>{
        console.log("rendered")
        document.title=`Clicked ${count} times`;
    },[count])

  return (
    <div>
        <p>clicked {count}times</p>
        <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>click the button</button>
    </div>
  )
}

export default HookCounter
