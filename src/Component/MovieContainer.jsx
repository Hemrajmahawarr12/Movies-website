import React from 'react'
import Movie from './Movie'
import { Box } from '@mui/material'
import moviedata from './StaticData'

function MovieContainer() {
  return (
    
    <Box>
       {
    moviedata.map((movie) =>(
            <Movie data={movie} index={movie.Id} />
    ))
       }
    </Box>
  )
}

export default MovieContainer
