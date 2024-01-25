import { Typography,Box, Stack} from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'

const MovieOutput = () => {
const output = useSelector((state)=>state.fav.Input)
console.log(output);

  return (
    <div>
    {output.map((movie, index) => (
      <div key={index}>
        <Box sx={{marginTop:"120px"}}>
        <img src={movie.poster} alt={movie.title} style={{ height: "280px", width: "100%" }} />
        <Typography  sx={{ fontSize: "30px" }}>{movie.title}</Typography>
        <Stack mt={4} spacing={0.5}>
                    <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
                      <Typography>{movie.year}</Typography>
                      <Typography>{movie.runtime}</Typography>
                    </Stack>
                  </Stack>
        </Box>
        
                
                    
        <hr />
      </div>
    ))}
  </div>
);
};

export default MovieOutput
