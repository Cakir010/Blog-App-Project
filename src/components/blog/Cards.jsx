import * as React from "react";
import Card, { cardClasses } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { btnDetail, cardButton, iconStyle } from "../../styles/globalStyle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThreePIcon from "@mui/icons-material/ThreeP";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box } from "@mui/material";

const Cards = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <img
          height="150"
          src={
            item.image
              ? item.image
              : "https://www.w3schools.com/howto/img_avatar.png"
          }
          alt="img"
        />
      </Typography>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography
          sx={{ minHeight: "120px" }}
          variant="body2"
          color="text.secondary"
        >
          {item.content}
        </Typography>
        <Typography sx={{ mt: "3vh", mb: "5vh" }}>
          {item.publish_date}
        </Typography>
        <Typography sx={{ display: "flex" }}>
          {" "}
          <AccountBoxIcon /> {item.author}
        </Typography>
      </CardContent>
      <CardActions sx={cardButton}>
        <Box sx={iconStyle}>
          <Box sx={{display:'flex'}}> <ThumbUpAltIcon/>
          <span>1</span></Box>
         <Box sx={{display:'flex'}}><ThreePIcon/>
          <span>1</span></Box>
          <Box sx={{display:'flex'}}><VisibilityIcon/>
          <span>1</span></Box>
          
        </Box>
        <Button sx={btnDetail} variant="contained">
          Contained
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
