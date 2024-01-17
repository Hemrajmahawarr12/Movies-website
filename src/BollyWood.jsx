import React, { useEffect, useState } from "react";
import { Stack, Typography, Box, Container, Pagination, BottomNavigationAction, BottomNavigation } from '@mui/material'
import photo from '../src/Images/bImage.jpg'
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "./FavSlice";
import { ConnectingAirportsOutlined } from "@mui/icons-material";

function BollyWood() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
const favState = useSelector((state) => state.fav);
  const [favoriteStatus, setFavoriteStatus] = useState([]);
  const dispatch=useDispatch();

  const fav = JSON.parse(localStorage.getItem("Favourite"))
  console.log(fav)
  
const state=useSelector((state) => {
  // console.log("🚀 ~ BollyWood ~ state:", state)
  return state
})
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
      .then((result) => result.json())
      .then((resp) => {

        setData(resp);
        
        // setFavoriteStatus(Array(resp.length).fill(''));
      });
    }, []);
    
    const handleFavoriteClick = (item) => {  
      const newFavoriteStatus = [...favoriteStatus];
      if(!newFavoriteStatus.includes(item.Title)){
        newFavoriteStatus.push(item.Title);
        dispatch(addFav(item))  
      }else{
        const index = newFavoriteStatus.indexOf(item.Title);
        newFavoriteStatus.splice(index, 1)
        dispatch(removeFav(item))
      }
      localStorage.setItem("Favourite",JSON.stringify(newFavoriteStatus))

      setFavoriteStatus(newFavoriteStatus);
      
  };



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(()=> {
    const wishL = JSON.parse(localStorage.getItem("Favourite"))
    console.log("karan",wishL)
    setFavoriteStatus(wishL)
  },[])

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around", background: "linear-gradient(pink, transparent),linear-gradient(to top left, lime, transparent),linear-gradient(to top right, blue, transparent)", height: "100%" }}>
      <div style={{ border: "2px solid black", padding: "50px", height: "100%", width: "1000px", marginTop: "120px", marginBottom: "50px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          {currentItems.map((item, index) => (
            <Container key={index}>
              <Stack sx={{ display: "flex", alignItems: "center" }}>
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
                      icon={<FavoriteIcon sx={{ color: favoriteStatus?.includes(item.Title) ? 'red' : '' }} />} onClick={() => { handleFavoriteClick(item); }}
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
            <Pagination count={Math.ceil(data.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} />
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default BollyWood;