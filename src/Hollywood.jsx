import React, { useEffect, useState } from 'react'
import { Stack, Typography, Box, Container, Pagination, BottomNavigationAction, BottomNavigation } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch, useSelector } from 'react-redux';
import { hollyfav, removehollyFav} from './FavSlice';

function Hollywood() {
  const [guest, setGuest] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);
  const itemPerPage = 2;
  const [favoriteColors, setFavoriteColors] = useState([]);
  const dispatch = useDispatch();

  const newbolly = useSelector((state)=>state.fav.hollyfav)

  useEffect(()=>{
    setFavoriteColors(newbolly)
  },[])

  const newHollyAdd = useSelector((state)=>state.fav.hollyWood)
     console.log("newHollyAdd",newHollyAdd);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies").then((result) => {
      result.json().then((resp) => {
        setGuest(resp)
      })
    })
  },[])



  const favbtn = (item)=>{
    const newfav = [...favoriteColors];
    const present = newfav.find((obj) => obj.Title === item.Title);
    if(!present){
      newfav.push(item)
      dispatch(hollyfav(newfav))
    }else{
      const index = newfav.findIndex((favItem) => favItem.Title === item.Title);
        newfav.splice(index, 1)
      dispatch(removehollyFav(newfav))
    }
  setFavoriteColors(newfav)
}


  const lastItem = currentItem * itemPerPage;
  const firstItem = lastItem - itemPerPage;
  const lis = [...newHollyAdd]
  const newlis = lis.reverse();
  const newHollyList = [...newlis,...guest]
  const data = newHollyList.slice(firstItem, lastItem);
  

  const handlePage = (event, value) => {
    setCurrentItem(value)
  }


 
  // useEffect(()=> {
  //   const wishL = JSON.parse(localStorage.getItem("HollyFavourite")) || [];
  //   console.log("karan",wishL)
  //   setFavoriteColors(wishL)
  // },[])
  

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
              <Stack mt={4} spacing={0.5}>
                    <Stack direction={"row"} justifyContent={"space-between"} padding={"0px 20px"}>
                      <Typography>{item.Year}</Typography>
                      <Typography>{item.Runtime}</Typography>
                    </Stack>
                  </Stack>
              <BottomNavigation sx={{ position: "absolute", bottom: 0, width: "100%" }}>

                        <BottomNavigationAction
                          label='Watch Now'
                          icon={<MovieIcon />}
                        ></BottomNavigationAction>

                        <BottomNavigationAction
                          label='favorite'
                          icon={<FavoriteIcon sx={{ color: favoriteColors.some(favItem => favItem.Title === item.Title) ? 'red' : '' }} />} onClick={() => favbtn(item)}
                    ></BottomNavigationAction>
                        <BottomNavigationAction label='Download' icon={<DownloadIcon />}></BottomNavigationAction>
                      </BottomNavigation>
              
              
            </Box>
            </Stack>
          </Container>
        
        ))}
    </div>
    <Box sx={{ justifyContent: "center", display: "flex" }}>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Pagination count={Math.ceil(newHollyList.length / itemPerPage)} page={currentItem} onChange={handlePage}/>
          </Stack>
        </Box>


    </div>
    </div>
  )
}

export default Hollywood;
