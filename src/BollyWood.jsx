
import React, { useEffect, useState } from "react";
import { Head } from "./Head";
import { Container, Stack, Typography, Box } from '@mui/material'
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import React, { useState } from 'react';
// import moviedata from './StaticData';
// import DownloadIcon from '@mui/icons-material/Download';
// import MovieIcon from '@mui/icons-material/Movie';





function BollyWood() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies').then((result) => {
            result.json().then((resp) => {
                // console.log("result",resp)
                setData(resp)
            })
        }
        )
    }, [])
    console.log(data)

    
        return(
      
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>
        { 
          data.map((item) => {
            return (
              <Box sx={{ border: "2px solid black", height: "600px", width: "400px", backgroundColor: "#ACDDDE", position: "relative", overflow: "hidden", margin: "20px" }}>
                <Box >
           <img src={item.Poster} style={{ height: "280px", width: "100%" }}></img>
                </Box>
                <Typography sx={{ fontSize: "30px" }}>{item.Title}</Typography>
                {/* <Container>{item.Year}</Container> */}
                <Stack mt={4} spacing={0.5} >
                  <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
                    <Typography>{item.Year}</Typography>
                    <Typography>{item.Runtime}</Typography>
                  </Stack>
                  <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
                    <Typography>{item.Genre}</Typography>
                    <Typography>{item.Rated}</Typography>
                  </Stack>
              </Stack>
              </Box>
            
              )
        })}
        </div>
         )
         

    
    
    

}
        



export default BollyWood;

