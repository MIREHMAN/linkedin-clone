import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

const PostCard = () => {
  return (
    <Card fullWidth sx={{mt:2}}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        
          <MoreVert />
        
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      component="img"
      height="300"
      image="/static/images/cards/paella.jpg"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
     
        <Favorite />
     
     
        <Share />
     
      
    </CardActions>
   
  </Card>
  )
}

export default PostCard