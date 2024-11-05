import styled from "@emotion/styled";
import { LinkedIn, Mail, Notifications, SearchRounded } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";

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



const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Box display='flex' alignItems='center'>
        <LinkedIn /> <Typography variant="h6" sx={{display:{xs:'none', md:'block'}}}>Linkedin-Clone</Typography>
        </Box>
       
        <Search/>
        <Box sx={{display:'flex', alignItems:'center', gap:1}}>
        <IconBox>
        <SearchRounded/>
        </IconBox>
        <IconBox> 
            <Badge badgeContent={4} color="secondary">
                <Notifications/>
            </Badge>
        </IconBox>
        <IconBox>
            <Badge badgeContent={3} color="secondary">
                <Mail/>
            </Badge>
        </IconBox>
        <IconButton >
            <Avatar onClick={e=>setOpen(true)}/>
        </IconButton>
        
       
        </Box>
      
        
      </MyToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
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
