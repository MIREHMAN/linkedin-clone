import { ChatBubbleOutline, Favorite, FavoriteBorder, MoreHoriz,  Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";

const PostCard = () => {
  const RandomImage = "https://picsum.photos/200";
  return (
    <Card  sx={{mb:1, width:'100%'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="user">
            M
          </Avatar>
        }
        action={
          <IconButton>
            <MoreHoriz />
          </IconButton>
        }
        title="Jon Doe"
        subheader="Posted September 14, 2024"
      />
     
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. 
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="300"
        image={RandomImage}
        alt="Post"
      />
      <Divider sx={{mt:1}}/>
      <CardActions >
      
         
         <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
          
       
        <IconButton>
        <ChatBubbleOutline/> 
        </IconButton> 
        
        <IconButton>
        <Share />
        </IconButton> 
        
        
      </CardActions>
    </Card>
  );
};

export default PostCard;
