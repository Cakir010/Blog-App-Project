import {
  fetchFail,
  fetchStart,
  getBlogs,
  getComments,
  getDetail,
  
} from "../features/blogSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken, axiosPublic } = useAxios();

  // const BASE_URL = "https://32245.fullstack.clarusway.com/api/";

  //!_________________________GETBLOG_____________________________

  const getBlogsData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`api/${url}/`);
      dispatch(getBlogs({ data, url }));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  //!_____________________________GETCOMMENT_____________________________

  const getCommet = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`api/${url}/${id}/`);
      dispatch(getDetail({ data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  //!_______________________________GETLİKE________________________

  const getLike = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`api/${url}/${id}/`);
   
      getBlogsData("blogs");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!_____________________________POSTCOMMENT________________

  const postComments = async (url, id  , info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`api/${url}/${id}/`, info );
      dispatch(getComments({ data }));
      getCommet('blogs' , id)
      
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
//!______________________________________________________________
  const getCategories = async (url, id  ) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get(`api/${url}/`);
    
      getBlogsData('categories' )
      
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { getBlogsData, getCommet, getLike, postComments ,getCategories};
};

export default useBlogCalls;
