import styled from "@emotion/styled";
import { BubbleChart, ChatBubble, ChatSharp, LinkedIn, Mail, Notifications, SearchRounded } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";
import Profile from '../assets/Profile_Img.jpg'

const MyToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
});
const IconBox=styled(IconButton)({
  border:'1px solid lightgray',
  padding:3,
  borderRadius:8,
  color:'white'
})

const userMenu=()=>{
  return
  
}

const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Box display='flex' alignItems='center' gap={1}>
        <BubbleChart /> <Typography variant="h6" sx={{}}>Chatty</Typography>
        </Box>
       
        <Search/>
        <Box sx={{display:'flex', alignItems:'center', gap:1}}>
        <IconBox>
        <SearchRounded/>
        </IconBox>
        <IconBox> 
            <Badge badgeContent={4} variant="small" color="secondary">
                <Notifications/>
            </Badge>
        </IconBox>
        <IconBox>
            <Badge badgeContent={3} color="secondary">
                <Mail/>
            </Badge>
        </IconBox>
        <IconButton >
            <Avatar src={Profile} onClick={e=>setOpen(true)}/>
        </IconButton>
        
       
        </Box>
      
        
      </MyToolbar>
      <Menu
        id="positioned-user-menu"
        aria-labelledby="positioned-user-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
