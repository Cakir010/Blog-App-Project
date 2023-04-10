import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import Card from "../components/blog/Cards";
import { Container, Grid } from "@mui/material";
import { flexCard } from "../styles/globalStyle";

const MyBlog = () => {
  const { getMyBlogData } = useBlogCalls();
  const { myBlog } = useSelector((state) => state.blog);
  const { id } = useSelector((state) => state.auth);

  useEffect(() => {
    getMyBlogData("blogs", id);
  }, []);

  return (
    <>
      <Container >
        <Grid 
       sx={flexCard}>
          {myBlog?.map((item) => (
            <Card  key={item.id} item={item} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default MyBlog;

// import React, { useEffect } from 'react'

// import useBlogCalls from '../hooks/useBlogCalls'
// import { useSelector } from 'react-redux'
// import Cards from '../components/blog/Cards'
// import { Grid } from '@mui/material'
// import { flexCard } from '../styles/globalStyle'
// import { Outlet } from 'react-router'
// import Detail from './Detail'

// const MyBlogs = () => {
// const {getMyBlogData} = useBlogCalls()
// const {myBlog} = useSelector((state) => state.blog)
// const {id} = useSelector((state) => state.auth)

// useEffect(() => {
//   getMyBlogData('blogs' , id)
// }, [])

//   return (
//     <Grid container
//     //  justifyContent='center'
//     //  alignItems='center'
//      sx={flexCard}

//     >
//       {myBlog.map((item) =>(

//          <Grid item key={item.id}>
//         <Cards item={item}/>
//        </Grid>

//     ))}

//     </Grid>
//   )
// }

// export default MyBlogs
