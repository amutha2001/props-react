import React from 'react'

const Child1 = (props) => {
    console.log("props",props)
  return (
    <div>
        {props.name}
      
    </div>
  )
}

export default Child1
