import * as React from "react";
import Card, { cardClasses } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { btnDetail, cardButton, cardStyle, iconStyle } from "../../styles/globalStyle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThreePIcon from "@mui/icons-material/ThreeP";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const Cards = ({ item }) => {
  const {image , title , content , publish_date , author , id  } = item
  const [like , setLike] = useState(false)
  const [count , setCount] = useState(0)
  const navigate = useNavigate()



const handleLike = () => {
if(!like){
  setCount(count + 1)
  setLike(!like)
  
}else{
  setCount(count-1)
  setLike(!like)
}
}


  return (
    <Card sx={cardStyle}>
      <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <img
          height="150"
          src={
            {image}
              ?image
              : "https://www.w3schools.com/howto/img_avatar.png"
          }
          alt="img"
        />
      </Typography>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          sx={{ minHeight: "120px" }}
          variant="body2"
          color="text.secondary"
        >
          {content}
        </Typography>
        <Typography sx={{ my:3}}>
          {item.publish_date}
        </Typography>
        <Typography sx={{ display: "flex" }}>
          {" "}
          <AccountBoxIcon /> {author}
        </Typography>
      </CardContent>
      <CardActions sx={cardButton}>
        <Box sx={iconStyle}>
          <Box  onClick={handleLike} sx={{display:'flex'}}> <ThumbUpAltIcon/>
          <span>{count}</span></Box>
         <Box sx={{display:'flex'}}><ThreePIcon/>
          <span>2</span></Box>
          <Box sx={{display:'flex'}}><VisibilityIcon/>
          <span>4</span></Box>
          
        </Box>
        <Button onClick={()=> navigate(`/detail/${id}/`)}
         sx={btnDetail} variant="contained">
          READ MORE
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
