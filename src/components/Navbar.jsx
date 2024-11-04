import styled from "@emotion/styled";
import { LinkedIn, Mail, Message, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";

const MyToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
});
const MobileText=styled(Typography)({
    fontSize:'0.5rem',
    fontWeight:600,
    letterSpacing:'1px',
    color:'theme'
});


const Icons=styled(Box)(({
    display:'flex',
    alignItems:'center',
    border:'1px solid lightgray',
    p:2,
    borderRadius:'100px',
    
    "&:hover":{
        backgroundColor:'ButtonShadow',
        cursor:'pointer',
        borderRadius:'100px'
    }
  

}));
const UserBox=styled(Box)(({
    display:'flex',
    alignItems:'center',
    border:'1px solid lightgray',
    gap:2,
    borderRadius:'16px',
    "&:hover":{
        backgroundColor:'ButtonShadow',
        cursor:'pointer',
        borderRadius:'16px'
    }
  

}));

const Navbar = () => {
    const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Box display='flex' alignItems='center'>
        <LinkedIn /> <Typography variant="h6" sx={{display:{xs:'none', md:'block'}}}>Linkedin-Clone</Typography>
        </Box>
       
        <Search/>
        <Box sx={{display:'flex', alignItems:'center', gap:2}}>
        <Icons sx={{display:{xs:'none', md:'block'}}}> 
            <Badge badgeContent={4} color="secondary">
                <Notifications/>
            </Badge>
        </Icons>
        <Icons sx={{display:{xs:'none', md:'block'}}}>
            <Badge badgeContent={3} color="secondary">
                <Mail/>
            </Badge>
        </Icons>
        <Icons sx={{display:{xs:'none', md:'block'}}}>
            <Avatar onClick={e=>setOpen(true)}/>
        </Icons>
        
        <UserBox onClick={e=>setOpen(true)} sx={{display:{xs:'flex', md:'none'}}}>
        <Avatar/>
        <MobileText>John Doe</MobileText>
        </UserBox>
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
