import React, { useState } from "react";
import {
    AppBar,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    Button,
    useMediaQuery,
    useTheme,
    Stack,
    IconButton,
    Container,
    Box,
} from "@mui/material";
import App from "./App";
import TheatersIcon from "@mui/icons-material/Theaters";
import DraComp from "./DraComp";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import poster from "../src/Images/moviePoster.jpg";
import MovieContainer from "../src/Component/MovieContainer";

function Head() {
    const [value, setValue] = useState();
    const theme = useTheme();
    const IsMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(IsMatch);
    return (
        <>
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
                            </Tabs>
                            </Stack>
                            <Stack spacing={2} direction={"row"} justifyContent={"center"} alignItems={"center"} >
                                
                                    <IconButton><FavoriteIcon sx={{color:"red"}}  /> <Typography variant="h5">Favourite
                                </Typography></IconButton>
                            </Stack>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Box sx={{height:"100vh", width:"100%"  ,overflow:"hidden",backgroundColor:"black"}}>
                
                <img style={{height:"100%", width:"100%", opacity:0.6}} src={poster} alt="poster"></img>
            </Box>
            
        </>
    );
}

export default Head;
