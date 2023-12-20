import React, { useState } from 'react'
import { AppBar,Tab,Tabs, Toolbar, Typography,Button,useMediaQuery,useTheme } from '@mui/material'
import App from './App'
import TheatersIcon from '@mui/icons-material/Theaters';
import DrawerComp from './DrawerComp'; 


const PAGES = ["Movies", "TV Shows", "Web Series", "Join Now"]
function Header() {
    const[value,setValue] = useState();
    const theme = useTheme();
    const IsMatch =  useMediaQuery(theme.breakpoints.down("md"));
    console.log(IsMatch);
    // console.log(value)
    // console.log(theme)
  return (
    <>
    <AppBar sx={{background:"#752599"}}>
        <Toolbar>
            {/* <Typography>Hemraj</Typography> */}
            <TheatersIcon />
            {
                IsMatch ? (
                    <>
                    <Typography sx={{fontSize:"20px", paddingLeft:"3.5%"}}>MoviesWorld</Typography>
                    <DrawerComp />
                    </>
                ) :(
                    <>
                     <Tabs sx={{marginLeft:"50px"}} textColor='inherit' value={value} onChange={(e,index) => setValue(index)}>
                        <Typography sx={{fontSize :"25px", marginTop:"5px", paddingRight:"30px"}}>MoviesWorld</Typography>
{
    PAGES.map((page,index) =>(
        <Tab key={index} label ={page} sx={{color:"black", fontWeight:"bold"}}/>
    ))
}

                
                {/* <Tab label ="TV Shows " sx={{color:"black", fontWeight:"bold"}}/>
                <Tab label ="Web Series" sx={{color:"black", fontWeight:"bold"}}/>
                <Tab label ="Join Now" sx={{color:"black", fontWeight:"bold"}}/> */}

            </Tabs>

            {/* <Button variant='outlined'sx={{marginLeft:"auto", fontWeight:"bold"}}>Sign Up </Button> */}
            <Button variant="contained" color="success" sx={{marginLeft:"auto"}}>Sign Up</Button>
            <Button variant='contained' color="success" sx={{marginLeft:"10px"}}>Log In </Button>
                    </>
                )
            }
           
         </Toolbar>
         
        
    </AppBar>
    </>

  )
}

export default Header
