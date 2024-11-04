import { Container, Stack } from '@mui/material'
import React from 'react'
import ProfileCol from '../components/ProfileCol'
import FeedCol from '../components/FeedCol'
import RecommendationCol from '../components/RecommendationCol'

const Homepage = () => {
  return (
    <Container >
    <Stack direction='row' spacing={4} justifyContent='space-around'>
        <ProfileCol/>
        <FeedCol/>
        <RecommendationCol/>
    </Stack>
    </Container>
  )
}

export default Homepage