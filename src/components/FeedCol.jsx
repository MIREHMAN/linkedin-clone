import { Box } from '@mui/material'
import React from 'react'
import PostCard from './PostCard'

const FeedCol = () => {
  return (
    <Box flex={4} sx={{display:'flex', flexDirection:'column'}}>
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