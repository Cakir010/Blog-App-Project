export const Image = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
};

export const textTrunc = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

export const DetailCard = { 
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
}

export const cardStyle = {
  // display:'flex',
  // flexWrap:'wrap',

  m: "10px",
  minheight: "100%",
  maxHeight: "100%",
  
  cursor: "pointer",
  
  
  boxShadow:
  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
}


export const boxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  bgcolor: "white",
  border: "2px solid white",
  borderRadius: "10px",
  boxShadow: "24px 12px 12px 12px",
  mt:2,
  mb:2,
};

export const cardButton = {
  display: "flex",
  justifyContent: "end",
  justifyContent: "space-between",
  color: "gray",
};


export const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "white",
  border: "2px solid white",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
export const iconStyle = {
  
  display: "flex",
  
  gap: 3,
  
};
export const CardBlog = {
  display: "flex",
  flexDirection: "column",
};

export const btnDetail = {
  height:'100%' ,
  bgcolor: "orange",
  "&:hover": { color: "orange", bgcolor: "lightblue" },
};

export const btnStyle = {
 
  cursor: "pointer",
  bgcolor: "gray",
  "&:hover": { color: "gray", bgcolor: "orange" },
};

export const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: 2,
};


export const flexCard = {
display:'flex',
flexWrap:'wrap',
alignItems:'center',
justifyContent:'center',
m:4,






};

export const flexCenter = {
  // display: "flex",
  // justifyContent: "space-around",
  // width: "60%",
};

export const specialGit = {
  color: "black",
  "&:hover": { transform: "scale(2)" },
};
export const specialIns = {
  color: "purple",
  "&:hover": { transform: "scale(2)" },
};
export const specialYtb = {
  color: "red",
  "&:hover": { transform: "scale(2)" },
};
export const specialTwt = {
  color: "blue",
  "&:hover": { transform: "scale(2)" },
};
export const specialLnk = {
  color: "blue",
  "&:hover": { transform: "scale(2)" },
};
