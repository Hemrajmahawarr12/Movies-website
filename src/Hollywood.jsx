import React, { useEffect, useState } from 'react'
import { Stack, Typography, Box, Container, Pagination, BottomNavigationAction, BottomNavigation } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch, useSelector } from 'react-redux';
import { addFav } from './FavSlice';

function Hollywood() {
  const [guest, setGuest] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);
  const itemPerPage = 2;
  const [favoriteColors, setFavoriteColors] = useState([]);
  console.log('huhbff====>',favoriteColors);


  useEffect(() => {
    fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies").then((result) => {
      result.json().then((resp) => {
        setGuest(resp)
      })
    })
  },[])


  const lastItem = currentItem * itemPerPage;
  const firstItem = lastItem - itemPerPage;
  const data = guest.slice(firstItem, lastItem);
  const dispatch = useDispatch();

  const state=useSelector((state) => {
    console.log("🚀 ~ BollyWood ~ state:", state)
    return state
  })

  useEffect(()=>{
      let list =JSON.parse(localStorage.getItem("HollyFavourite"))
      setFavoriteColors(list)
  },[])



  const handlePage = (event, value) => {
    setCurrentItem(value)

  }


  const favbtn= (item)=>{
    console.log(item.Title);
    const newfav = [...favoriteColors];
    if(!newfav.includes(item.Title)){
      newfav.push(item.Title)
    }else{
      const index = newfav.indexOf(item.Title);
      newfav.splice(index, 1)
    }
    localStorage.setItem("HollyFavourite",JSON.stringify(newfav))
  setFavoriteColors(newfav)
  dispatch(addFav(item))
}


  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-around", background: "linear-gradient(pink, transparent),linear-gradient(to top left, lime, transparent),linear-gradient(to top right, blue, transparent)", height: "100%" }}>
       <div style={{border: "2px solid black", padding: "50px", height: "100%", width: "1000px",  marginTop: "120px", marginBottom: "50px"}}>
        <div style={{display:"flex",alignItems:"center"}}>
      {
        data.map((item,index) => (
          <Container >
          <Stack sx={{display:"flex",alignItems:"center"}} >
            <Box sx={{ border: "2px solid black", height: "600px", width: "400px", backgroundColor: "#ACDDDE", position: "relative", overflow: "hidden", margin: "20px" }}>
              <Box>
                <img src={item.Poster} style={{ height: "280px", width: "100%" }} alt={item.Title} />
              </Box>
              <Typography sx={{ fontSize: "30px" }}>{item.Title}</Typography>
              <Typography>{item.Year}</Typography>
              <Typography>{item.Runtime}</Typography>
              <BottomNavigation sx={{ position: "absolute", bottom: 0, width: "100%" }}>

                        <BottomNavigationAction
                          label='Watch Now'
                          icon={<MovieIcon />}
                        ></BottomNavigationAction>

                        <BottomNavigationAction
                          label='favorite'
                          icon={<FavoriteIcon sx={{color: favoriteColors.includes(item.Title) ? 'red':''}}/>} onClick={()=>favbtn(item)}></BottomNavigationAction>
                        <BottomNavigationAction label='Download' icon={<DownloadIcon />}></BottomNavigationAction>
                      </BottomNavigation>
              
              
            </Box>
            </Stack>
          </Container>
        
        ))}
    </div>
    <Box sx={{ justifyContent: "center", display: "flex" }}>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Pagination count={Math.ceil(guest.length / itemPerPage)} page={currentItem} onChange={handlePage}/>
          </Stack>
        </Box>


    </div>
    </div>
  )
}

export default Hollywood
