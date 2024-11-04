import { Box } from '@mui/material'
import React from 'react'
import PostCard from './PostCard'

const FeedCol = () => {
  return (
    <Box sx={{display:'flex', mt:2, flexDirection:'column'}}>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </Box>
  )
}

export default FeedCol