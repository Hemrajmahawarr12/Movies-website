import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addBollyFav, addBollywoddInput, addHollyFav, addHollyInput, addHollywoddInput, addInput,bollyedit,edit } from './FavSlice';
import MovieOutput from './MovieOutput';
import { useLocation, useNavigate } from 'react-router-dom';


const MovieInput = () => {
  const [id,setId] = useState('')
  const [Poster, setPoster] = useState('');
  const [Title, setTitle] = useState('');
  const [Year, setYear] = useState('');
  const [Runtime, setRuntime] = useState('');
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const[toggle, setToggle ] = useState(false); 
  

  const isValidPosterURL = (url) => {
    return ( url.startsWith('https://'),
    url.startsWith('data')
    )
  };

  


  const newmovie = useSelector((state) => state.fav.bollyWood)
  console.log("sdfghjkertyui",newmovie);
  // const manydata = [...newmovie,new]


  const { state } = location;
  console.log("🚀 ~ MovieInput ~ loc̥ation::::::::::::::", state)
  const editData = state ? state.movieData : null;
  console.log("newedittttttttttttttttttttttBolly",editData);

  const {editbutton} = useSelector((state)=>state.fav)
  console.log("editbutton=========>>>>>>>>>>",editbutton);
  

  const newAdd = useSelector((state)=>state.fav.Pathname)
  console.log("newAddddddddddd",newAdd);

  

 useEffect(() => {
  if (editData) {
    setId(editData.id || '')
    setPoster(editData.Poster || '');
    setTitle(editData.Title || '');
    setYear(editData.Year || '');
    setRuntime(editData.Runtime || '');
  }
}, [editData]);
  
  const handleAddMovie = () => {
    const OnlineData = {
      id,
      Poster,
      Title,
      Year,
      Runtime,
     
    };
  
    if (!isValidPosterURL(Poster)) {
      alert('Please enter a valid Poster URL starting with "https://"');
      return;
    }
    
    if (newAdd === "/bollywood") {
      dispatch(addBollywoddInput(OnlineData));
      navigate("/bollywood")
      
    } else{
      dispatch(addHollywoddInput(OnlineData));
      navigate("/hollywood")

    }


    setId('')
    setPoster('');
    setTitle('');
    setYear('');
    setRuntime('');

    const url = new URL(Poster);
    if (url.protocol.startsWith('http')) {
      window.open(Poster);
    }
  }


  const handleEditMovie = () => {
    const OnlineData = {
      id,
      Poster,
      Title,
      Year,
      Runtime,
    };
  
    
    if (!isValidPosterURL(Poster)) {
      alert('Please enter a valid Poster URL starting with "https://"');
      return;
    }


    if (newAdd === "/bollywood") {
      dispatch(addBollywoddInput(OnlineData));
      navigate("/bollywood")
      
    } else{
      dispatch(addHollywoddInput(OnlineData));
      navigate("/hollywood")
    }


    setId('')
    setPoster('');
    setTitle('');
    setYear('');
    setRuntime('');

    const url = new URL(Poster);
    if (url.protocol.startsWith('http')) {
      window.open(Poster);
    }
    dispatch(edit(false))

  }
  const handleReset = () =>{
    setId('')
    setPoster('');
    setTitle('');
    setYear('');
    setRuntime('');
  }
   
  const isItParsent = newmovie.find((item)=> item.id === id)


  return (
    <div style={{justifyContent:"center",display:"flex"}}>
        <Box sx={{border:"2px solid black",height:"600px",width:"1200px",margin:"20px",marginTop:"90px", background: "linear-gradient(pink, transparent),linear-gradient(to top left, lime, transparent),linear-gradient(to top right, blue, transparent)"}} >
            <Typography sx={{fontSize:"50px",fontFamily:"fantacy"}}>Fill Form For Add Movies</Typography>
            <hr />
            <Container sx={{margin:"20px",marginTop:"50px"}}>
              <Box sx={{display:"flex",margin:"30px"}}>
                <Typography sx={{fontSize:"30px"}} >Id:</Typography>
                {
                  editData ? <input style={{marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} value={id} onChange={(e) => setId(e.target.value)} disabled></input> : <input style={{marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} value={id} onChange={(e) => setId(e.target.value)}></input>
                }
                {
                  isItParsent ? <Typography sx={{color:"red",fontSize:"25px"}}>id is already exist</Typography> : ''
                }
                
              </Box>
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
            <input style={{width:"30%",marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} autoComplete='off' value={Title} onChange={(e)=> setTitle(e.target.value)}></input>
            </Box>
            <Box sx={{display:"flex",margin:"30px"}}>
            <Typography sx={{fontSize:"30px"}}>Year:  </Typography>
            <input style={{marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} autoComplete='off' value={Year} onChange={(e)=> setYear(e.target.value)}></input>
            </Box>
            <Box sx={{display:"flex",margin:"30px"}}>
            <Typography sx={{fontSize:"30px"}}>Runtime: </Typography>
            <input style={{marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} autoComplete='off' value={Runtime} onChange={(e)=> setRuntime(e.target.value)}></input>
            </Box>
            {/* <Box sx={{display:"flex",margin:"30px"}}>
            <Typography sx={{fontSize:"30px"}}>Type : </Typography>
            <input style={{marginLeft:"20px",borderRadius:"5px",fontSize:"22px"}} value={state} onChange={()=> setState('BollyWood')}></input>
            </Box> */}
            <Container sx={{width:"300px",display:"flex",justifyContent:"space-around"}}>
            <Button variant="outlined" sx={{color:"black",backgroundColor:"ButtonHighlight"}} onClick={handleReset}>Reset</Button>
           {
            !editbutton ? <Button variant="contained" color="success" sx={{backgroundColor:"blue"}} onClick={()=>handleAddMovie()}>Add Movies</Button> : 
            <Button variant="contained" color="success" sx={{backgroundColor:"blue"}} onClick={()=>handleEditMovie()}>Edit Movies</Button>
           }
            </Container>
            </Container>

        </Box>
    </div>
  )
  
}

export default MovieInput
