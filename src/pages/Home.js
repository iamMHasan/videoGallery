import React from 'react'
import Pagination from '../component/Pagination/Pagination'
import Tags from '../component/Tags/Tags'
import VideoGrid from '../component/videoGrid/VideoGrid'

const Home = () => {
    return (
        <>
            <Tags />
            <VideoGrid />
            <Pagination />
        </>
    )
}

export default Home
