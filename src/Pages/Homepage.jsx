import { Stack } from '@mui/material'
import React from 'react'
import ProfileCol from '../components/ProfileCol'
import FeedCol from '../components/FeedCol'
import RecommendationCol from '../components/RecommendationCol'

const Homepage = () => {
  return (
    <Stack direction='row' spacing={3} justifyContent='space-around'>
        <ProfileCol/>
        <FeedCol/>
        <RecommendationCol/>
    </Stack>
  )
}

export default Homepage