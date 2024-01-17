import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { removeFav } from './FavSlice';

const Favcart = () => {

const favState = useSelector((state) => state.fav);
const dispatch = useDispatch();
console.log(favState);


    useEffect(()=>{
                 localStorage.setItem("Hemraj",JSON.stringify(favState))
                 const data = favState.map((favsta)=>favsta.Title)
                 localStorage.setItem("Favourite",JSON.stringify(data))
                },[favState])

    const DeleteSingleCart=(item)=>{
        dispatch(removeFav(item))
    }

  return (
    <div>
     {
       favState.map((item,id) =>{
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
    </div>
  )
}

export default Favcart

