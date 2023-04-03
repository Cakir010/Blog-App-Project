import axios from "axios";
import React from "react";
import { fetchFail, fetchStart, getBlogs } from "../features/blogSlice";
import { useDispatch } from "react-redux";

const useBlogCalls = () => {
  const dispatch = useDispatch();

  const BASE_URL = "https://32245.fullstack.clarusway.com/api/";

  const getBlogsData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(`${BASE_URL}${url}/`);
      dispatch(getBlogs({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getBlogsData };
};

export default useBlogCalls;
