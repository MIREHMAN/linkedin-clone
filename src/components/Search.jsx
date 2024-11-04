import React from "react";
import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import { SearchRounded } from "@mui/icons-material";

const Searchbox = styled(Box)({
  display: "flex",
  alignItems:'center',
  backgroundColor: "white",
  width: "30%",
  borderRadius: "8px",
  padding: 2,
});
const Search = () => {
  return (
    <Searchbox>
        <SearchRounded sx={{color:'gray',pl:1}}/>
      <InputBase sx={{pl:1}} placeholder="Search Here..."  value=''/>
    </Searchbox>
  );
};

export default Search;
