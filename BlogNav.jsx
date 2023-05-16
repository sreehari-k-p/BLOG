import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import { Link, Routes } from 'react-router-dom'
const BlogNav = () => {
  return (
    <div>  
    <AppBar style={{backgroundColor:'green'}}  >
           <Toolbar>    
      <Typography align ='left' sx={{flexGrow: 1 }} ><h3> Travel Blog </h3></Typography>
      <Button variant='contained' style={{fontFamily:'bold'  }} > <Link to={'/home'}> home </Link>  </Button> 
      <br /> <br />
      <Button variant='contained' style={{fontFamily:'bold'  }} > <Link to={'/'}> add your blog </Link></Button> 
           </Toolbar>      
         </AppBar>
         <br /><br /><br />
         <Typography variant='h2' style={{fontFamily:'fantacy'}} color={{red}}> Blog </Typography>
    
       </div>
  )
}

export default BlogNav