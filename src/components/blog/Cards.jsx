import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, Grid, ListItemButton } from "@mui/material";

// import { useSelector } from "react-redux";
import { btnDetail, cardButton, cardStyle, iconStyle, textTrunc } from  '../../styles/globalStyle'
import { useNavigate } from "react-router";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { red } from "@mui/material/colors";

const Cards = ({ item }) => {
  const {id}=useSelector((state)=>state.auth)


  const {getLike}=useBlogCalls()
  // const { currentUser } = useSelector((state) => state.auth);
  const navigate=useNavigate()
  const { myBlog } = useSelector((state) => state.blog);





const handleLike=()=>{

  getLike("likes", item.id);
}

  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Box sx={cardStyle} >
        <Typography
        component="div"
        sx={{ display: "flex", justifyContent: "center", mt: 2 }}
      >
        <img
          height="150"
          src={
            item?.image
              ? item.image
              : "https://www.w3schools.com/howto/img_avatar.png"
          }
          alt="img"
        />
      </Typography>
      <CardContent>
        <Typography 
         align="center"
          gutterBottom variant="h5" 
          component="div" sx={{
            ...textTrunc,
            textAlign: "center",
            color: "darkgreen",
          }}>
          {item?.title}
        </Typography>
        <Typography
        variant="body2"
        component={"span"}
        sx={{
          ...textTrunc,
          m: 2,
        }}
        >
          {item?.content}
        </Typography>
        <Typography gutterBottom
            component={"span"}
            variant="body2"
            sx={{ textAlign: "left", m: 2 }}>
          {item?.publish_date}
        </Typography>
        <Typography  component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            m: 2,
            color: "black",
          }}>
          <FaceIcon />
          {item?.author}
        </Typography>
      </CardContent>
   
      
      <CardActions >
        <Box sx={iconStyle}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <ThumbUpIcon
              sx={{
                color: `${
                  item.likes_n?.filter((x) => x.user_id === id)
                    .length > 0
                    ? "red"
                    : "black"
                }`,
              }}
              onClick={handleLike}
            />
            {item.likes}
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <MessageIcon />
            {item.comment_count}
          </Typography>

          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <RemoveRedEyeIcon />
            {item.post_views}
          </Typography>
        </Box>
        <ListItemButton to={`detail/${item.id}`} sx={btnDetail}>
          Read More
        </ListItemButton>
      </CardActions>
      </Box>
    </Grid>
  );
};
export default Cards;