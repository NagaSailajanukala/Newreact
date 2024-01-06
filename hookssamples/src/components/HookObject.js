import React,{useState} from 'react'

function HookObject() {
    const [name,setName]=useState({FirstName:'',LastName:''});

  return (
    <div>
    <form>
        FirstName: <input type="text" value={name.FirstName}
        onChange={e=>setName({...name,FirstName:e.target.value})}/>

       LastName: <input type="text" value={name.LastName} 
        onChange={e=>setName({...name,LastName:e.target.value})}/>
        <h2>FirstName : {name.FirstName}</h2>
        <h2>LastName:{name.LastName}</h2>
        </form>  
    </div>
  )
}

export default HookObject
