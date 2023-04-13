import React, { useState } from "react";

import useBlogCalls from "../hooks/useBlogCalls";
import { Box } from "@mui/material";
import NewBlogForm from "../components/blog/NewBlogForm";

const initialState = {
  title: "",
  image: "",
  category: "",
  status: "",
  content: "",
};

const NewBlog = () => {
  const { postBlog } = useBlogCalls();
 
  // console.log(formData);
  const [formData, setFormData] = useState(initialState);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog("blogs" , formData);
    setFormData(initialState);
  };

  return (
    <>
      <Box>
        <title>BlogApp - New Blog</title>
      </Box>
      <NewBlogForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text="New"
      />
    </>
  );
};

export default NewBlog;