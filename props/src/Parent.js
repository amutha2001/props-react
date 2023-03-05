import React from 'react'
import Child1 from './Child1'

const Parent = () => {
    const details=[
        {
            name:"Amutha",
            duration:100
        },
        {
            name:"Kaviya",
            duration:130
        }
    ]
    const listItems=details.map((element)=>{
      return (
        <div >
             <ul>
                <li>{element.name}</li>
             </ul>
             <ul>
                <li>{element.duration}</li>
             </ul>
           <Child1 details={details}  />
        </div>
      )
    }
    )
    return(
       <div>
          {listItems}
       </div>
    )
 
}

export default Parent
