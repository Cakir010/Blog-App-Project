import React, { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import Cards from "../components/blog/Cards";
import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import { flexCard } from "../styles/globalStyle";

const Dashboard = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { getBlogsData } = useBlogCalls();
  useEffect(() => {
    getBlogsData("blogs");
  }, []);

  return (
    <div>
      <Box  >
      
      
        {blogs.map((item) => (
          <Box  item key={item.id}>
            <Cards item={item} />
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Dashboard;