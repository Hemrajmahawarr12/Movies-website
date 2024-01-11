import { Container, Stack, Typography, Box, IconButton, BottomNavigation, BottomNavigationAction } from '@mui/material'
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from 'react';
import moviedata from './StaticData';
import DownloadIcon from '@mui/icons-material/Download';
import MovieIcon from '@mui/icons-material/Movie';
// import HomeIcon from '@mui/icons-material/Movie';




function Movie(){


  

}

// function Movie() {
//   // const [state1, setState1] = useState("red");
//   // const [state2, setState2] = useState();
//   // const [iconColor, setIconColor] = useState('primary');
//   // const [color, setColor] = useState(false)
//   // const [key, setKey] = useState(null);  
//   // const [favoriteColors, setFavoriteColors] = useState(Array(moviedata.length).fill(false));
//   const [favoriteColors, setFavoriteColors] = useState();
//   // console.log(Array(moviedata.length).fill(false))

//   console.log(moviedata)
//   // function handleClick(){
//   //   if(iconColor === 'primary') {
//   //     setIconColor('red');
//   //   } else {
//   //     setIconColor('primary');
//   //   };
//   // }
//   // const toggleFavorite = (index) => {
//   //   const newColors = [...favoriteColors];
//   //   newColors[index] = !newColors[index];
//   //   setFavoriteColors(newColors);
//   //   index != [...favoriteColors]
//   //   return setFavoriteColors(index)
//   // }


//   // const toggleFavorite =(id) =>{

//   // }


//   const handleRedirect = () => {
//     window.location.href = 'https://www.netflix.com';
//   };

//   return (
//     <>
//       <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>
//         {
//           moviedata.map((item, i) => {
//             return (
//               <Box key={i} sx={{ border: "2px solid black", height: "600px", width: "400px", backgroundColor: "#ACDDDE", position: "relative", overflow: "hidden", margin: "20px" }}>
//                 <Box >
//                   <img src={item.Poster} style={{ height: "280px", width: "100%" }}></img>
//                 </Box>
//                 <Typography sx={{ fontSize: "30px" }}>{item.Title}</Typography>
//                 <Container>{item.Plot}</Container>
//                 <Stack mt={4} spacing={0.5} >
//                   <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
//                     <Typography>{item.Released}</Typography>
//                     <Typography>{item.Runtime}</Typography>
//                   </Stack>
//                   <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
//                     <Typography>{item.Genre}</Typography>
//                     <Typography>{item.Rated}</Typography>
//                   </Stack>
//                 </Stack>
//                 {/* <Stack direction={"row"} justifyContent={"space-around"} marginTop={"50px"}>
//           <IconButton>
//             <Typography>Watch Now</Typography>
//           </IconButton>
//           <IconButton>
//             <FavoriteIcon />
//           </IconButton>
//           <IconButton>
//             <Typography>Download</Typography>
//           </IconButton>
         
//         </Stack> */}
//                 <BottomNavigation sx={{ position: "absolute", bottom: 0, width: "100%" }}>

//                   <BottomNavigationAction
//                     label='Watch Now'
//                     icon={<MovieIcon />}
//                     onClick={handleRedirect}
//                   ></BottomNavigationAction>


//                   <BottomNavigationAction
//                     label='favorite'
//                     icon={<FavoriteIcon sx={{
//                       //  color: favoriteColors[i] ? 'red' : ''
//     }} />
//   }
//                     // onClick={() => toggleFavorite(i)}
//                   ></BottomNavigationAction>
//                   <BottomNavigationAction label='Download' icon={<DownloadIcon />} onClick={handleRedirect}> </BottomNavigationAction>
//                 </BottomNavigation>

//               </Box>
//             )
//           })
//         }
//       </div>
//     </>

//   )
// }

export default Movie;
