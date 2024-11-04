import React from "react";
import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

const Searchbox = styled(Box)({
  display: "flex",
  alignItems:'center',
  backgroundColor: "white",
  width: "45%",
  borderRadius: "12px",
  padding: {xs:1,md:2},
});
const Search = () => {
  return (
    <Searchbox>
        <SearchRounded sx={{color:'gray',fontSize:"medium",pl:{xs:0,md:1}}}/>
      <InputBase sx={{pl:{xs:0,md:1}}} placeholder="Search Here..."  value=''/>
    </Searchbox>
  );
};

export default Search;
