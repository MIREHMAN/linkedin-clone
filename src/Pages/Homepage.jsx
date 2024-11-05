import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import FeedCol from '../components/FeedCol'
import RightCol from '../components/RightCol'
import LeftCol from '../components/LeftCol'

const Homepage = () => {
  return (
    <Box>
    <Stack direction='row'  justifyContent='space-around'>
        <LeftCol/>
        <FeedCol/>
        <RightCol/>
    </Stack>
    </Box>
  )
}

export default Homepage