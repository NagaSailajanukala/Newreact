import React from 'react'
import Persons from './Persons'

function Personlist() {
    const person=[{
        sno:1,
        name:'Sai',
        age:30,
        job:'accountant'
    },
    {
        sno:2,
        name:'Ram',
        age:33,
        job:'Clerk'
    },
    {
        sno:3,
        name:'Siva',
        age:78,
        job:'Manager'
    }
]
    //  const newpersons=person.map(newperson => <h2>iam {newperson.name} 
    //  iam {newperson.age}years old and my Designation is {newperson.job}</h2>)
    const newpersons=person.map(newperson => <Persons key={newperson.sno} person={newperson}/>)
    
  return (
    <div>
      {newpersons}
    </div>
  )
}

export default Personlist
