import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [fname, setFname] = useState('swetha')
    var [interval, setInteerval] = useState()
    const handleInput = (e) => {
        console.log(e.target.value)
        setFname(e.target.value)
    }
    const submitHandler = () => {
        console.log("clicked");
        setInteerval(fname);
    }
  return (
      <div>
          <Typography variant='h4'>welcome {interval}</Typography>

          <TextField variant='outlined' label='type your name' onChange={handleInput} /><br /><br/>
          <Button variant='contained' onClick={submitHandler}>Submit</Button>

        
      </div >
  )
}

export default State