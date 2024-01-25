import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBollyFav, addBollywoddInput, addHollyFav, addHollyInput, addHollywoddInput, addInput } from './FavSlice';
import MovieOutput from './MovieOutput';
import { useLocation, useNavigate } from 'react-router-dom';


const MovieInput = () => {
  
  const [Poster, setPoster] = useState('');
  const [Title, setTitle] = useState('');
  const [Year, setYear] = useState('');
  const [Runtime, setRuntime] = useState('');
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("🚀 ~ MovieInput ~ loc̥ation:", location)
  // const {path} = useLocation();
  // const [state,setState] = useState('')
  // const [newState,setNewState] = useState('')

  const newAdd = useSelector((state)=>state.fav.Pathname)
  console.log("newAddddddddddd",newAdd);



  // const state =useSelector((state)=>{
  //   console.log("hemu",state)
  //   return state
// })

  
   

  const handleAddMovie = () => {
    const OnlineData = {
      Poster,
      Title,
      Year,
      Runtime,
    
    };
    
    
    
    if (newAdd === "/bollywood") {
      dispatch(addBollywoddInput(OnlineData));
      navigate("/bollywood")
    } else{
      dispatch(addHollywoddInput(OnlineData));
      navigate("/hollywood")
    }



    setPoster('');
    setTitle('');
    setYear('');
    setRuntime('');

    const url = new URL(Poster);
    if (url.protocol.startsWith('http')) {
      window.open(Poster);
    }
  }
  const handleReset = () =>{
    setPoster('');
    setTitle('');
    setYear('');
    setRuntime('');
  }

  return (
    <div style={{justifyContent:"center",display:"flex"}}>
        <Box sx={{border:"2px solid black",height:"600px",width:"1200px",margin:"20px",marginTop:"90px", background: "linear-gradient(pink, transparent),linear-gradient(to top left, lime, transparent),linear-gradient(to top right, blue, transparent)"}}>
            <Typography sx={{fontSize:"50px",fontFamily:"fantacy"}}>Fill Form For Add Movies</Typography>
            <hr />
            <Container sx={{margin:"20px",marginTop:"50px"}}>
            <Box  sx={{display:"flex",margin:"20px"}}>
            <Typography sx={{fontSize:"30px"}}>Poster/ImageURL: </Typography>
            <input style={{width:"70%",marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} value={Poster} onChange={(e)=> setPoster(e.target.value)} onKeyDown={(e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }}
  ></input>
            </Box>
            <Box sx={{display:"flex",margin:"30px"}}>
            <Typography sx={{fontSize:"30px"}}>Title :</Typography>
            <input style={{width:"30%",marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} value={Title} onChange={(e)=> setTitle(e.target.value)}></input>
            </Box>
            <Box sx={{display:"flex",margin:"30px"}}>
            <Typography sx={{fontSize:"30px"}}>Year:  </Typography>
            <input style={{marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} value={Year} onChange={(e)=> setYear(e.target.value)}></input>
            </Box>
            <Box sx={{display:"flex",margin:"30px"}}>
            <Typography sx={{fontSize:"30px"}}>Runtime: </Typography>
            <input style={{marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} value={Runtime} onChange={(e)=> setRuntime(e.target.value)}></input>
            </Box>
            {/* <Box sx={{display:"flex",margin:"30px"}}>
            <Typography sx={{fontSize:"30px"}}>Type: </Typography>
            <input style={{marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} value={state} onChange={()=> setState('BollyWood')}></input>
            </Box> */}
            <Container sx={{width:"300px",display:"flex",justifyContent:"space-around"}}>
            <Button variant="outlined" sx={{color:"black",backgroundColor:"ButtonHighlight"}} onClick={handleReset}>Reset</Button>
            <Button variant="contained" color="success" sx={{backgroundColor:"blue"}} onClick={handleAddMovie}>Add Movies</Button>
            </Container>
            </Container>

        </Box>
    </div>
  )
  
}

export default MovieInput
