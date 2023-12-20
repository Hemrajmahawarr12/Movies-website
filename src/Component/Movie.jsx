import { Container, Stack, Typography,Box, IconButton, BottomNavigation, BottomNavigationAction } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from 'react';
import moviedata from './StaticData';
import DownloadIcon from '@mui/icons-material/Download';
import MovieIcon from '@mui/icons-material/Movie';
import HomeIcon from '@mui/icons-material/Movie';
import { red } from '@mui/material/colors';


function Movie() {
  // const [state1, setState1] = useState("red");
  // const [state2, setState2] = useState();
  // const [iconColor, setIconColor] = useState('primary');
  const [color, setColor] = useState(false)

  // function handleClick(){
  //   if(iconColor === 'primary') {
  //     setIconColor('red');
  //   } else {
  //     setIconColor('primary');
  //   };
  // }


  function handleClick(){
    setColor(!color)
    
  }

  console.log("🚀 ~ file: Movie.jsx:4 ~ Movie ~ pr̥op:")
  return (
    <Box sx={{border:"2px solid black",height:"600px", width:"400px", backgroundColor:"#ACDDDE",position:"relative",overflow:"hidden"}}>
      <Box sx={{width:"100%"}}>
        <img src={moviedata[0].Poster} style={{height:"280px",width:"100%"}}></img>
        </Box>
        <Typography sx={{fontSize:"30px"}}>{moviedata[0].Title}</Typography>
        <Container>{moviedata[0].Plot}</Container>
        <Stack mt={4} spacing={0.5} >
          <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
            <Typography>{moviedata[0].Released}</Typography>
            <Typography>{moviedata[0].Runtime}</Typography> 
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
            <Typography>{moviedata[0].Genre}</Typography>
            <Typography>{moviedata[0].Rated}</Typography>
          </Stack>
        </Stack>
        {/* <Stack direction={"row"} justifyContent={"space-around"} marginTop={"50px"}>
          <IconButton>
            <Typography>Watch Now</Typography>
          </IconButton>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <Typography>Download</Typography>
          </IconButton>
         
        </Stack> */}
      <BottomNavigation sx={{position:"absolute",bottom:0,width:"100%"}}>
        <BottomNavigationAction label='Watch Now' icon={<MovieIcon />} ></BottomNavigationAction>
        <BottomNavigationAction label='favorite' icon={<FavoriteIcon />} 
        sx={{color:`${color && `red`}`}}
         onClick={handleClick}></BottomNavigationAction>
        <BottomNavigationAction label='Download' icon={<DownloadIcon />}> </BottomNavigationAction>
      </BottomNavigation>

    </Box>
  )
}

export default Movie
