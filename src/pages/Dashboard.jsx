import React, { useEffect } from 'react'

import useBlogCalls from '../hooks/useBlogCalls'
import { useSelector } from 'react-redux'
import Cards from '../components/blog/Cards'
import { Grid } from '@mui/material'
import { flexCard } from '../styles/globalStyle'
import { Outlet } from 'react-router'
import Detail from './Detail'

const Dashboard = () => {
const {getBlogsData} = useBlogCalls()
const {blogs} = useSelector((state) => state.blog)
useEffect(() => {
getBlogsData('blogs')
}, [])

  return (
    <Grid container
    //  justifyContent='center' 
    //  alignItems='center'
     sx={flexCard}
    
    > 
      {blogs.map((item) =>(
       
         <Grid item key={item.id}>
        <Cards item={item}/>
       </Grid>
      
    ))}


    </Grid>
  )
}

export default Dashboard