import styled from "@emotion/styled";
import { LinkedIn } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const MyToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
});

const Search=styled(Box)({
    display:'flex',
    backgroundColor:'white',
  

});
const Icons=styled(Box)({
    display:'flex',
    backgroundColor:'white',
  

});
const Navbar = () => {
  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Box display='flex' alignItems='center'>
        <LinkedIn /> <Typography variant="h6" sx={{display:{xs:'none', md:'block'}}}>Linkedin-Clone</Typography>
        </Box>
       
        <Search>Search</Search>
        <Icons>Icons</Icons>
      </MyToolbar>
    </AppBar>
  );
};

export default Navbar;
