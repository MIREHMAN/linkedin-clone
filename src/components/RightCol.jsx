import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Paper, Typography } from '@mui/material'
import React from 'react'

const RightCol = () => {
  const RandomImage = "https://picsum.photos/200";
  return (
    <Box flex={2} sx={{display:{xs:'none', md:'block'}}}>
      <Box position='fixed'>
      <Paper sx={{ml:2}} >
<Typography variant='h6' fontWeight={300}> Online Friends</Typography>
<AvatarGroup max={8}>
  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography variant='h6' fontWeight={300}> Latest Photos</Typography>
<ImageList cols={3} gap={5}> 
  <ImageListItem>
    <img src={RandomImage} alt=''/>
  </ImageListItem>
  <ImageListItem>
  <img src={RandomImage} alt=''/>
  </ImageListItem>
  <ImageListItem>
    <img src={RandomImage} alt=''/>
  </ImageListItem>
  <ImageListItem>
  <img src={RandomImage} alt=''/>
  </ImageListItem>
  <ImageListItem>
    <img src={RandomImage} alt=''/>
  </ImageListItem>
  <ImageListItem>
  <img src={RandomImage} alt=''/>
  </ImageListItem>
  
</ImageList>
        </Paper>
      </Box>
      </Box>
  )
}

export default RightCol