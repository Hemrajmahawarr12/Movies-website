import React, { useEffect, useState } from "react";
import {
    AppBar,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    Stack,
    IconButton,
    Button
} from "@mui/material";
// import App from "./App";
import TheatersIcon from "@mui/icons-material/Theaters";
import DraComp from "./DraComp";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import poster from "../src/Images/moviePoster.jpg";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import { useDispatch } from "react-redux";
import { addPathname } from "./FavSlice";
const NavBar = () => {
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    const location = useLocation()
    const [value, setValue] = useState();
    const theme = useTheme();
    const IsMatch = useMediaQuery(theme.breakpoints.down("md"));
    const handleBolly = ()=> {
        dispatch(addPathname("/bollywood"))
        navigate("/bollywood")
    }
    const handleHolly = ()=> {
        dispatch(addPathname("/hollywood"))
        navigate("/hollywood")
    }
    const handlefav = ()=> {
        navigate("/favourite")
    }
    const handleInput = ()=> {
        navigate("/input")
    }
    

    
  return (
    <div>
        
        <AppBar>
                <Toolbar  sx={{ display:"flex",justifyContent:"space-between"}}>
               {IsMatch ? (
                        <>
                             <TheatersIcon />
                            <Typography sx={{ fontSize: "20px", paddingLeft: "3.5%" }}>
                                MoviesWorld
                            </Typography>
                            <DraComp />
                        </>
                    ) : (
                        <>
                            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
                            <TheatersIcon />

                            <Tabs
                                sx={{ marginLeft: "50px" }}
                                textColor="inherit"
                                value={value}
                                onChange={(e, index) => setValue(index)}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "25px",
                                        marginTop: "5px",
                                        paddingRight: "30px",
                                    }}
                                >
                                    MoviesWorld
                                </Typography>

                                <SearchIcon
                                    sx={{
                                        fontSize: "25px",
                                        marginTop: "10px",
                                        marginLeft: "40px",
                                    }}
                                    />
                                    <Stack flexDirection={"row"}>
                                    <Typography onClick={handleBolly} sx={{cursor:"pointer",marginLeft:"70px",fontSize: "25px",
                                        marginTop: "5px"}}>BollyWood</Typography>
                                        

                                    <Typography onClick={handleHolly} sx={{cursor:"pointer",fontSize: "25px",
                                        marginTop: "5px",marginLeft:"40px"}}>HollyWood</Typography>
                                        </Stack>
                            </Tabs>
                            </Stack>
                            <Button variant="contained" color="success" sx={{marginLeft:"500px"}} onClick={handleInput}>Add Movies</Button>
                            <Stack spacing={2} direction={"row"} justifyContent={"center"} alignItems={"center"} >
                                
                                    <IconButton onClick={handlefav}><FavoriteIcon sx={{color:"red"}}  /> <Typography variant="h5">Favourite
                                </Typography></IconButton>
                            </Stack>
                            
                        </>
                    )}
                </Toolbar>
            </AppBar>
      
    </div>
  )
}

export default NavBar
