import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import {removebollyfav, removehollyFav} from './FavSlice';
import { json } from 'react-router-dom';




const Favcart = () => {

const bollyfavState = useSelector((state) => state.fav.bollyfav);
const hollyfavState = useSelector((state) => state.fav.hollyfav);
console.log("bollySelector",bollyfavState);
console.log("hollySelector",hollyfavState);

const dispatch = useDispatch();

const DeleteSingleCart=(item)=>{
  dispatch(removebollyfav(item))
  }
  const DeleteHollyCart=(item)=>{
    dispatch(removehollyFav(item))
  }

       return (
    <div>
  {
   bollyfavState.length > 0 && bollyfavState.map((item,id) =>{
     console.log("nnnnnnnneeeeeewwwwwww",item);
     return (
         <>
     <div style={{display:"flex",justifyContent:"space-around",marginBottom:"60px"}} key={id} >

         <div key={id} style={{height:"300px",marginTop:"120px",border:"2px solid black",width:"800px",marginLeft:"100px",display:"flex"}}>
             <Box sx={{height:"100px",width:"400px"}}>
                 <img src={item.Poster} style={{height:"300px",marginRight:"600px",width:"400px"}}></img>
             </Box>
             <Container>
             <Typography sx={{ fontSize: "50px",marginTop:"10px" }}>{item.Title}</Typography> 
             <Stack mt={4} spacing={0.5}>
                 <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
                   <Typography>{item.Year}</Typography>
                   <Typography>{item.Runtime}</Typography>
                 </Stack>
               </Stack>
             </Container>
         
         </div>
         <Stack sx={{marginTop:"300px"}}>
         <Button variant="contained" color="success" onClick={()=>DeleteSingleCart(item)}>Remove</Button>
         </Stack>
                 </div>
                 <hr />
                 </>
     )
    })
  } 
  
   {
  hollyfavState.length > 0 && hollyfavState?.map((item,id) =>{
    console.log("hollyfavState",item);
     return (
         <>
     <div style={{display:"flex",justifyContent:"space-around",marginBottom:"60px"}} key={id} >
     
         <div key={id} style={{height:"300px",marginTop:"120px",border:"2px solid black",width:"800px",marginLeft:"100px",display:"flex"}}>
             <Box sx={{height:"100px",width:"400px"}}>
                 <img src={item.Poster} style={{height:"300px",marginRight:"600px",width:"400px"}}></img>
             </Box>
             <Container>
             <Typography sx={{ fontSize: "50px",marginTop:"10px" }}>{item.Title}</Typography> 
             <Stack mt={4} spacing={0.5}>
                 <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
                   <Typography>{item.Year}</Typography>
                   <Typography>{item.Runtime}</Typography>
                 </Stack>
               </Stack>
             </Container>
         
         </div>
         <Stack sx={{marginTop:"300px"}}>
       <Button variant="contained" color="success" onClick={()=>DeleteHollyCart(item)}>Remove</Button>
         </Stack>
                 </div>
                 <hr />
                 </>
     
     )
    })
  } 
  </div>
  )}
export default Favcart

