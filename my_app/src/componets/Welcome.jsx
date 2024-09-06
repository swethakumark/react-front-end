import {  Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'


const Welcome = () => {
    var [name1, fname] = useState()
    const JS = () => {
        fname('js')
    }
    const JAVA = () => {
        fname('JAVA')
    }
    const PYTHON = () => {
        fname('PYTHON')
    }
    useEffect(() => {
        JS()
        
 },[])
// const Welcome2 = () => {
//         var [name1, fname] = useState()
//         const JS = () => {
//             fname('js')
//         }
  return (
      <div>
          * <Typography variant='h6'>Welcome{ name1}</Typography>
          <Button variant='contained' color="error" onClick={JS}>JS</Button>
          <Button variant='contained' color="error" onClick={PYTHON}>PYTHON</Button>
          <Button variant='contained' onClick={JAVA}>JAVA</Button>

          
    </div>
  )
} 

export default Welcome