import React, { useState } from 'react'
import ChildComp from './child-comp'

const ParentComp = () => {

    const [counter, setCounter] = useState(0)

    const handleCounter=(val)=>{
        //console.log(val)
        setCounter(prev=>prev+val) // gettering and settering value at the same time )preferred way is using "prev" keyword

    }

  return (
    <div>
        <h2>Counter: {counter}</h2>
        <ChildComp handleCounter = {handleCounter}/>
    </div>
  )
}

export default ParentComp