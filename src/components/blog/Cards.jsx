import * as React from "react";
import Card, { cardClasses } from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {
  btnDetail,
  cardButton,
  cardStyle,
  flexCard,
  iconStyle,
  textTrunc,
} from "../../styles/globalStyle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThreePIcon from "@mui/icons-material/ThreeP";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import useBlogCalls from "../../hooks/useBlogCalls";

const Cards = ({ item }) => {
  const { image, title, content, publish_date, author, id, likes } = item;

  const navigate = useNavigate();
  const { getLike } = useBlogCalls();

  

  return (
    <Grid>
      <Card >
        <Typography sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <img
            height="150"
            src={
              { image }
                ? image
                : "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt="img"
          />
        </Typography>

        <Typography sx={{ m: 0, mt: 1, width: "100%", height: "150px" }}>
          <Typography
            gutterBottom
            // variant="h5"
            mt={3}
            sx={{ ...textTrunc, textAlign: "center", color: "orange" }}
          >
            {title.toUpperCase()}
          </Typography>

          <Typography variant="body2" sx={{ ...textTrunc, m: 2 }}>
            {content ?? "No Content"}
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
            sx={{ textAlign: "left", m: 2 }}
          >
            {publish_date ? new Date(publish_date).toLocaleString() : "No date"}
          </Typography>
        </Typography>

        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            m: 2,
            color: "green",
          }}
        >
          <AccountBoxIcon />
          <span>{author ?? "No author"}</span>
        </Typography>

        <Typography
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          m={2}
        >
          <Typography>
            <Typography
              onClick={() => getLike("likes", id)}
              sx={{ display: "flex", textAlign: "left" }}
            >
              {" "}
              <ThumbUpIcon />
              <span>{likes}</span>
            </Typography>

            <Typography sx={{ display: "flex", textAlign: "left" }}>
              <ThreePIcon />
              {item.comment_count}
              <span>3</span>
            </Typography>

            <Typography sx={{ display: "flex", textAlign: "left" }}>
              <VisibilityIcon />
              <span>4</span>
            </Typography>
          </Typography>
          <Typography>
            <Button
              onClick={() => navigate(`/detail/${item.id}/`)}
              sx={btnDetail}
              variant="contained"
            >
              READ MORE
            </Button>
          </Typography>
        </Typography>
      </Card>
    </Grid>
  );
};

export default Cards;
