import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Box, TextField } from "@mui/material";

import {
  btnDetail,
  cardButton,
  cardStyle,
  iconStyle,
} from "../../styles/globalStyle";
import { useNavigate } from "react-router";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

const CommentCard = ({ details }) => {
  const { author, content, image, likes, publish_date, id, comments } = details;

  const [info, setInfo] = useState({
    content: "",
  });
  const [toggle, setToggle] = useState(false);
  const { getLike, postComments } = useBlogCalls();
  // const {comments}=useSelector((state)=>state.blog)
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  console.log(info);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  //   const {blogs} = useSelector((state) => state.blog)

  //   useEffect(() => {
  //   getBlogsData('blogs')
  //   }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    postComments("comments", id, { ...info, post: id });
    setInfo("");
  };
  return (
    <div>
      <Card>
        <Typography
          component="div"
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        >
          <img
            height="150"
            src={
              image ? image : "https://www.w3schools.com/howto/img_avatar.png"
            }
            alt="img"
          />
        </Typography>
        <CardContent>
          <Typography
            sx={{ textAlign: "justify", minHeight: "120px" }}
            variant="body2"
            color="text.secondary"
          >
            {content}
          </Typography>
          <Typography sx={{ my: 1, fontSize: "0.9rem" }}>
            {publish_date}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <FaceIcon />
            {author}
          </Typography>
        </CardContent>
        <CardActions sx={cardButton}>
          <Box sx={iconStyle}>
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <ThumbUpIcon onClick={() => getLike("likes", details.id)} />
              {likes}
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <MessageIcon onClick={handleToggle} />2
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <RemoveRedEyeIcon />3
            </Typography>
          </Box>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
          ></Typography>
          
          {toggle && (
            <form component="form" onSubmit={handleSubmit}>
              <Box>
                  <Button type="submit" sx={btnDetail} variant="contained">
                  ADD COMMENT
                </Button>
                  <TextField
                  label="comments"
                  id={info.post}
                  name="content"
                  type="text"
                  variant="outlined"
                  onChange={handleChange}
                />
                <CommentForm comments={comments} />
                
              

              
              </Box>
            </form>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default CommentCard;

// import * as React from "react";
// import Card, { cardClasses } from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";

// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import {
//   btnDetail,
//   cardButton,
//   cardStyle,
//   iconStyle,
// } from "../../styles/globalStyle";
// import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
// import ThreePIcon from "@mui/icons-material/ThreeP";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import { Box, TextField } from "@mui/material";
// import { useNavigate } from "react-router";

// import { useState } from "react";
// import useBlogCalls from "../../hooks/useBlogCalls";
// import { useSelector } from "react-redux";
// import CommentForm from "./CommentForm";
// import { TextFields } from "@mui/icons-material";
// import { useEffect } from "react";

// const CommentCard = ({ details }) => {
//   const { author, content, image, likes, publish_date, id, comments } = details;

//   const [info, setInfo] = useState({
//     content: "",
//   });
//   const [toggle, setToggle] = useState(false);
//   const { getLike, postComments } = useBlogCalls();
//   // const {comments}=useSelector((state)=>state.blog)
//   const handleChange = (e) => {
//     setInfo({ ...info, [e.target.name]: e.target.value });
//     console.log(e.target.value);
//   };
//   console.log(info);
//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   const { blogs } = useSelector((state) => state.blog);

//   useEffect(() => {
//     getBlogsData("blogs");
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     postComments("comments", id, { ...info, post: id });
//     setInfo("");
//   };

//   return (
//     <div>
//       <Card sx={cardStyle}>
//         <Typography
//           component="div"
//           sx={{ display: "flex", justifyContent: "center", mt: 2 }}
//         >
//           <img
//             height="150"
//             src={
//               { image }
//                 ? image
//                 : "https://www.w3schools.com/howto/img_avatar.png"
//             }
//             alt="img"
//           />
//         </Typography>
//         <CardContent>
//           <AccountBoxIcon />
//           <Box sx={{ display: "flex", textAlign: "justify" }}>
//             {author}

//             <Typography sx={{ my: 3 }}>{publish_date}</Typography>
//           </Box>

//           {/* <Typography gutterBottom variant="h5" component="div">
//             {title}
//           </Typography> */}
//           <Typography
//             sx={{ minHeight: "120px" }}
//             variant="body2"
//             color="text.secondary"
//           >
//             {content}
//           </Typography>
//         </CardContent>
//         <CardActions sx={cardButton}>
//           <Box sx={iconStyle}>
//             <Box onClick={handleLike} sx={{ display: "flex" }}>
//               {" "}
//               <ThumbUpAltIcon />
//               <span>{count}</span>
//             </Box>
//             <Box sx={{ display: "flex" }}>
//               <ThreePIcon onClick={handleToogle} />
//               <span>2</span>
//             </Box>
//             <Box sx={{ display: "flex" }}>
//               <VisibilityIcon />
//               <span>4</span>
//             </Box>
//           </Box>
//           {toggle && (
//             <form component="form" onSubmit={handleSubmit}>
//               <Box>
//                 <TextFields
//                   label="comments"
//                   id={info.post}
//                   name="content"
//                   type="text"
//                   variant="outlined"
//                   onChange={handleChange}
//                 />
//                 <Button
//                   type="submit"
//                   sx={btnDetail}
//                   variant="contained"
//                   onClick={handleClick}
//                 >
//                   ADD COMMENT
//                 </Button>
//               </Box>
//             </form>
//           )}
//         </CardActions>
//         <CommentForm />
//       </Card>
//     </div>
//   );
// };

// export default CommentCard;
