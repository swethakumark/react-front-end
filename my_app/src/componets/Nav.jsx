import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link ,NavLink}from 'react-router-dom'

const Nav = () => {
  return (
      <div>
        <AppBar>
          <Toolbar>
          <Typography variant='h6'>my app </Typography>
          
                  <Link to='/login'>
                    <Button variant='container' color='error'>login</Button></Link>&nbsp;&nbsp;
                  <Link to='/'>
                    <Button variant='container' color='primary'>signup</Button></Link>
                  <Link to='/s'>
                    <Button variant='container' color='primary'>state</Button></Link>
                  <Link to='/counter'>
                    <Button variant='container' color='primary'>Counter</Button></Link>
                  <Link to='/welcome1'>
                    <Button variant='container' color='primary'>Welcome</Button></Link>
                  <Link to='/api'>
            <Button variant='container' color='primary'>Api</Button></Link>
          <Link to='/poke'>
            <Button variant='container' color='primary'>Pokemon</Button></Link>
                    
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav