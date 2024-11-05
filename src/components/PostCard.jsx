import { ChatBubbleOutline, Favorite, MoreHoriz,  Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";

const PostCard = () => {
  const RandomImage = "https://picsum.photos/200";
  return (
    <Card  sx={{mb:2, width:'100%'}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
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
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
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
      
         <IconButton>
         <Favorite />
          </IconButton> 
       
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
