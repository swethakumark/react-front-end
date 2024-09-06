import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleclick1 = () => {
        setCounter(counter +1)
    }
    const handleclick2 = () => {
        setCounter(counter-1)
    }
    return(
        <div>
            <br /><br /><br />
            <Typography variant='h6'>Count{ counter }</Typography>
   
          <Button variant='contained' color="error" onClick ={ handleclick1 } >+</Button>
          <Button variant='contained' onClick ={ handleclick2 } >-</Button>


    </div>
  )
}

export default Counter