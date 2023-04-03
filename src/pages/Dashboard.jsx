import React, { useEffect } from 'react'

import useBlogCalls from '../hooks/useBlogCalls'

const Dashboard = () => {
const {getBlogsData} = useBlogCalls()

useEffect(() => {
getBlogsData('blogs')
}, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard