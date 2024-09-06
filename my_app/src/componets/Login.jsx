import React from 'react'
import { Button, TextField } from '@mui/material' 


const Login = () => {
  return (
      <div>
      <h4>successfully login</h4>
    
      <TextField label="name" variant="outlined" />  <br /><br />
      <TextField type="password" label="password" variant="outlined" /><br /><br /> 
      <Button variant='contained' >Submit</Button>

    </div>
  )
}

export default Login