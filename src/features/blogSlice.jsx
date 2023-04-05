import { createSlice } from "@reduxjs/toolkit";



const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    categories: [],
    comments: "",
    likes: "",
    details:[],
    loading: false,
    error: false,
  },
  reducers: {
fetchStart : (state) => {
    state.loading = true
    state.error = false
},
getBlogs: (state , {payload : {data , url}})=>{
    state.loading=false
    state[url] = data
},
fetchFail: (state) => {
    state.loading = false
    state.error = true
  },
  getDetail:(state,{payload:{data}})=>{
    state.loading=false
    state.details=data
  },
  getComments:(state , {payload:{data}})=>{
state.loading=false
state.comments=data
  }
  },
});

export const {fetchStart , fetchFail , getBlogs , getDetail , getComments} = blogSlice.actions;

export default blogSlice.reducer;
