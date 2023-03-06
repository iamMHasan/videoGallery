import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoes } from '../../features/video/videoSlice'
import SingleVedio from './SingleVedio'

const VideoGrid = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideoes())
  }, [dispatch])
  const { videos, isLoading, isError } = useSelector(state => state.videos)
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div
          className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
        >

          {
            videos.map(video => <SingleVedio
              key={video.id}
              video={video}
            />)
          }

          {/* <!-- error section */}
          <div className="col-span-12">some error happened</div>
        </div>
      </section>
    </section>
  )
}

export default VideoGrid
