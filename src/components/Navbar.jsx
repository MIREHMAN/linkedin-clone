import styled from "@emotion/styled";
import { LinkedIn, Mail, Message, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import Search from "./Search";

const MyToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
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
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Box display='flex' alignItems='center'>
        <LinkedIn /> <Typography variant="h6" sx={{display:{xs:'none', md:'block'}}}>Linkedin-Clone</Typography>
        </Box>
       
        <Search/>
        <Box sx={{display:'flex', alignItems:'center', gap:2}}>
        <Icons>
            <Badge badgeContent={4} color="secondary">
                <Notifications/>
            </Badge>
        </Icons>
        <Icons>
            <Badge badgeContent={3} color="secondary">
                <Mail/>
            </Badge>
        </Icons>
        <Icons>
            <Avatar/>
            
        </Icons>
        <Typography>John Doe</Typography>
        </Box>
      
        
      </MyToolbar>
    </AppBar>
  );
};

export default Navbar;
