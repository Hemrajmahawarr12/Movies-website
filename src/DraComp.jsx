import React, { useState } from 'react'
import { Tab,Drawer, IconButton, List, ListItemButton, ListItemIcon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';



const PAGES = ["Movies", "TV Shows", "Web Series", "Join Now", "Login", "Sign Up"]

function DraComp() {
    const[openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
    <Drawer open ={openDrawer}
    onClose={()=> setOpenDrawer(false)}
    >
        <List>
        {
                     PAGES.map((page,index) =>(
            <ListItemButton>
             <ListItemIcon>{page }</ListItemIcon>
            </ListItemButton>
                ))}
            
        </List>
    </Drawer>
    <IconButton sx={{marginLeft :"auto", color:"white"}} onClick={()=> setOpenDrawer(!openDrawer)}>
    <MenuIcon />
    </IconButton>
   
    </>
   
  )
}

export default DraComp;