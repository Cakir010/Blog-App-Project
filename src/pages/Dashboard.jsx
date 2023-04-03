import React, { useEffect } from 'react'

import useBlogCalls from '../hooks/useBlogCalls'
import { useSelector } from 'react-redux'
import Card from '../components/blog/Card'

const Dashboard = () => {
const {getBlogsData} = useBlogCalls()
const {blogs} = useSelector((state) => state.blog)
useEffect(() => {
getBlogsData('blogs')
}, [])

  return (
    <div>
      {blogs.map((item) =>(
      <Card item={item} />
    ))}
    </div>
  )
}

export default Dashboard