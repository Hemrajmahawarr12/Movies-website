import React, { useEffect, useState } from 'react'
import { Box,Typography } from '@mui/material';
import image from '../src/Images/hollyImages.webp'

function Hollywood() {
  const [guest,setGuest] = useState([]);

  useEffect(()=>{
    fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies").then((result)=>{
      result.json().then((resp)=>{
        setGuest(resp)
      })
    })
  })
  return (
    <div style={{background:`url(${image})`, width:"100vw"}}>
      {
        guest.map((item)=>{
          return(
            <Box sx={{border:"2px solid black",height:"500px",width:"400px"}}>
              <Box>
                <img src={item.Poster} style={{height:"300px",width:"100%"}}></img>
                </Box>
                <Typography>{item.Title}</Typography>
                <Typography>{item.Runtime}</Typography>
                <Typography>{item.Year}</Typography>
            </Box>
          )
        })
      }
    
    </div>
  )
}

export default Hollywood
