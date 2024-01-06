import React from 'react'

function Persons({person}) {
    return (
        <div>
           <h2>iam {person.name} iam {person.age} years old and my Designation is {person.job}
            </h2>
        </div>
      )
}

export default Persons
