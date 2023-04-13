import {
  fetchFail,
  fetchStart,
  getBlogs,
  getComments,
  getDetail,
  getMyBlog,
  
} from "../features/blogSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router";

const useBlogCalls = () => {
  const navigate = useNavigate()
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
      console.log(data);
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
  //!===================POSTBLOG----NEWBLOG======================
  const postBlog = async (url , info) => {
    dispatch(fetchStart());
    try {
       await axiosWithToken.post(`api/${url}/`, info );
      
      getBlogsData(url)
      
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };


//!___________________________GET-CATEGORİES____________________
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


  //!______________________getMyBlogData______________________
  const getMyBlogData = async (url, id  ) => {
    dispatch(fetchStart());
    try {
   const {data} =    await axiosWithToken.get(`api/${url}/?author=${id}`);
    dispatch(getMyBlog({data}))
      // getBlogsData('categories' )
      
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };


  //!-----------------------Delete----------
const deleteData = async (url , id) => {
dispatch(fetchStart())
try {
  await axiosWithToken.delete(`api/${url}/${id}` )
  getBlogsData(url)
  navigate(-1)

} catch (error) {
  console.log(error);
      dispatch(fetchFail());
}
}

  //!_______________________Put__________________________
const putData = async (url , info) => {
  dispatch(fetchStart())
  try {
    const {data} = await axiosWithToken.put(`api/${url}/${info.id}` , info )
    getBlogsData('blogs')
    dispatch(getBlogs({data}))
    // navigate(-1)
  } catch (error) {
    console.log(error);
    dispatch(fetchFail());
  }
}
 
 


  return {putData , deleteData, getBlogsData, getCommet, getLike,postBlog,getMyBlogData, postComments ,getCategories };
};

export default useBlogCalls;
