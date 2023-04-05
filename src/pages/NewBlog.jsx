import React, { useState } from "react";

import BlogForm from "../components/blog/BlogForm";
// import { Helmet } from "react-helmet";
import useBlogCalls from "../hooks/useBlogCalls";
import { Box } from "@mui/material";

const initialState = {
  title: "",
  image: "",
  category_name: "",
  status: "",
  content: "",
};

const NewBlog = () => {
  const { postComments } = useBlogCalls();
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postComments(formData);
    setFormData(initialState);
  };

  return (
    <>
      <Box>
        <title>BlogApp - New Blog</title>
      </Box>
      <BlogForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleFormSubmit}
        text="New"
      />
    </>
  );
};

export default NewBlog;