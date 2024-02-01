import React, { useEffect, useState } from 'react'
import { Stack, Typography, Box, Container, Pagination, BottomNavigationAction, BottomNavigation } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch, useSelector } from 'react-redux';
import { edit, hollyfav, removehollyCart, removehollyFav} from './FavSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, useNavigate } from 'react-router-dom';




function Hollywood() {
  const [guest, setGuest] = useState([]);
  const [currentItem, setCurrentItem] = useState(1);
  const itemPerPage = 2;
  const [favoriteColors, setFavoriteColors] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const search = useSelector((state)=>state.fav.Search.toString())

  const newbolly = useSelector((state)=>state.fav.hollyfav)

  useEffect(()=>{
    setFavoriteColors(newbolly)
  },[])

  const newHollyAdd = useSelector((state)=>state.fav.hollyWood)
     console.log("newHollyAdd",newHollyAdd);

     useEffect(() => {
      fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
        .then((result) => result.json())
        .then((resp) => {
        const newdata=  resp?.map((data,index)=> ({...data, id:index+1}))
          console.log("🚀 ~ .then ~ n̥ewdata:", newdata)
          setGuest(newdata);
        });
      }, []);



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
  const data = newHollyList.filter((item) =>item.Title.toLowerCase().includes(search)).slice(firstItem,lastItem);
  console.log("datatatatatatata",data);

  const handlePage = (event, value) => {
    setCurrentItem(value)
  }


  const handleEdit = (item,index) =>{
    const findData = guest.filter((obj)=>obj.Title===item.Title)
    if(!findData.length > 0){
    navigate("/input", { state: { movieData: item }});
    dispatch(edit(true));
    }else{
      alert("you can not edit Api Data")
    }
  }



  const handleDelete = (item) => {
    dispatch(removehollyCart(item))
    dispatch(removehollyFav(item))
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-around", background: "linear-gradient(pink, transparent),linear-gradient(to top left, lime, transparent),linear-gradient(to top right, blue, transparent)", height: "100%" }}>
      {
        data.length===0 ? (<Typography sx={{marginTop:"100px"}}>No result found</Typography>) : 
        (
         <>
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
                          icon={<EditIcon onClick={()=>handleEdit(item,index)}/>}
                        ></BottomNavigationAction>

                        <BottomNavigationAction
                          label='favorite'
                          icon={<FavoriteIcon sx={{ color: favoriteColors.some(favItem => favItem.Title === item.Title) ? 'red' : '' }} />} onClick={() => favbtn(item)}
                    ></BottomNavigationAction>
                        <BottomNavigationAction label='Download' icon={<DeleteIcon onClick={()=>handleDelete(item)} />}></BottomNavigationAction>
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
         </>

        )
      }
    </div>
  )
}

export default Hollywood;
