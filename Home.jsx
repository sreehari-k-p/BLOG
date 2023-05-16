import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
 var[users,setUsers] = useState([])
 useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((response) =>{
    console.log(response.data)
    setUsers(response.data)
  })
  .catch((err) => console.log(err))
 },[])

  return (
    <div style={{padding: "100px"}}>
      <Typography variant='h4' style={{fontStyle:'oblique'  }}  ><u> Some Famous Blogs</u> </Typography>
    <TableContainer>
      <Table>
        <TableHead>
        <TableRow>
          <TableCell> Aurthor </TableCell>
          <TableCell>Blogs</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map((value,index)=>{
              return(
                <TableRow key={index}>
                  <TableCell> {value.title}</TableCell>
                  <TableCell> {value.body} </TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
    
    
    </div>
  )
}

export default Home