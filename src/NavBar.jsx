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
    Button,
    InputBase,
    SearchIconWrapper,
    Box
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
import { addPathname, edit, searchSlice } from "./FavSlice";
import { Search } from "@mui/icons-material";
const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [search,setSearch] = useState([])
    const [value, setValue] = useState();
    const theme = useTheme();
    const IsMatch = useMediaQuery(theme.breakpoints.down("md"));

    // const handleHome=()=>{
    //     navigate("/")
    // }
    const handleBolly = () => {
        dispatch(addPathname("/bollywood"))
        navigate("/bollywood")
    }
    const handleHolly = () => {
        dispatch(addPathname("/hollywood"))
        navigate("/hollywood")
    }
    const handlefav = () => {
        navigate("/favourite")
    }
    const handleInput = () => {
        navigate("/input")
        dispatch(edit(false))
    }

   dispatch(searchSlice(search))
console.log(search,"h");

    return (
        <div>

            <AppBar>
                <Toolbar sx={{ display: "flex", justifyContent: "space-around"}}>
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
                        <div style={{display: "flex"}}>
                            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
                                <TheatersIcon />                                                
                                <Tabs
                                    sx={{ marginLeft: "50px", display: "flex" }}
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
                                    <Stack flexDirection={"row"}>
                                        {/* <Typography  sx={{cursor:"pointer",marginLeft:"30px",fontSize: "25px",
                                        marginTop: "5px"}} onClick={handleHome}>Home</Typography> */}
                                        <Typography onClick={handleBolly} sx={{
                                            cursor: "pointer", marginLeft: "40px", fontSize: "25px",
                                            marginTop: "5px"
                                        }}>BollyWood</Typography>


                                        <Typography onClick={handleHolly} sx={{
                                            cursor: "pointer", fontSize: "25px",
                                            marginTop: "5px", marginLeft: "40px"
                                        }}>HollyWood</Typography>
                                    </Stack>

                                </Tabs>
                            </Stack>
                            </div>
                            
                        <div style={{display:"flex",justifyContent:"center", width:"30%"}}>
                             <input style={{display:"flex",justifyContent:"center", height:"20px",width:"250px", borderRadius:"10px", padding:"10px"}} placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
                             </div>
                            <Button variant="contained" color="success" onClick={handleInput}>
                            Add Movies</Button>
                       
                            <Stack spacing={2} direction={"row"} justifyContent={"center"} alignItems={"center"} >

                                <IconButton onClick={handlefav}><FavoriteIcon sx={{ color: "red" }} /> <Typography variant="h5">Favourite
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
