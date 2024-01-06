import React from 'react'

function NameList() {
    const Names=['abc','def','ghi'];
  return (
    <div>
      {
        Names.map(Name=><h2>{Name}</h2>)
      }
    </div>
  )
}

export default NameList
