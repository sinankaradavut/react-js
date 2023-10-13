import React, { useContext } from 'react'
import StoreContext from '../../store'

const Exchange = () => {
   
    const store = useContext(StoreContext);
 
    return (

     <div>
        <Topbar/>
        <Content/>
    </div>
  )
}

export default Exchange;