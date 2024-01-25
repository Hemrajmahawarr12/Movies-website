import React, { useEffect, useState } from "react";
import { Stack, Typography, Box, Container, Pagination, BottomNavigationAction, BottomNavigation } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch, useSelector } from "react-redux";
import { addBollyFav,bollyfav,removeBollywoodFav, removebollyfav } from "./FavSlice";

function BollyWood() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [favoriteStatus, setFavoriteStatus] = useState([]);
  const dispatch = useDispatch();

  const newbolly = useSelector((state)=>state.fav.bollyfav)

  useEffect(()=>{
  setFavoriteStatus(newbolly)
  },[])

  
 const addFormData = useSelector((state) => state.fav.bollyWood)
 console.log("addFormData",addFormData);



  useEffect(() => {
    fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
      .then((result) => result.json())
      .then((resp) => {
        setData(resp);
      });
    }, []);
    
    const handleFavoriteClick = (item) => { 
      const newFavoriteStatus = [...favoriteStatus];
      const present = newFavoriteStatus.find((obj) => obj.Title === item.Title);
      console.log("item", item, !present);
      if(!present){
        newFavoriteStatus.push(item);
        console.log("item in fun",newFavoriteStatus)  
        dispatch(bollyfav(newFavoriteStatus))
      }else{
        const index = newFavoriteStatus.findIndex((favItem) => favItem.Title === item.Title);
        newFavoriteStatus.splice(index, 1)
        dispatch(removebollyfav(newFavoriteStatus))
      }
      setFavoriteStatus(newFavoriteStatus);
      };
    

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const list = [...addFormData]
  const listData = list.reverse();
  const allItems = [...listData,...data]
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

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
                      icon={<FavoriteIcon sx={{ color: favoriteStatus.some(favItem => favItem.Title === item.Title) ? 'red' : '' }} />} onClick={() => handleFavoriteClick(item)}
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
            <Pagination count={Math.ceil(allItems.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} />
          </Stack>
        </Box>
      </div>
    </div>
  );
}

export default BollyWood;
