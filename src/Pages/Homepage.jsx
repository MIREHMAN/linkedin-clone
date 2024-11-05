import { Container, Stack } from '@mui/material'
import React from 'react'
import FeedCol from '../components/FeedCol'
import RecommendationCol from '../components/RecommendationCol'
import LeftCol from '../components/LeftCol'

const Homepage = () => {
  return (
    <Container >
    <Stack direction='row' spacing={4} justifyContent='space-around'>
        <LeftCol/>
        <FeedCol/>
        <RecommendationCol/>
    </Stack>
    </Container>
  )
}

export default Homepage