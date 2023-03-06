import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoes } from '../../features/video/videoSlice'
import Loading from '../Loading/Loading'
import SingleVedio from './SingleVedio'

const VideoGrid = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideoes())
  }, [dispatch])
  const { videos, isLoading, isError, errorMsg } = useSelector(state => state.videos)

  let content = 0;
  if (isLoading)
    content = <Loading />
  if (isError)
    content = <div className="col-span-12">some error happened <br /> {errorMsg}</div>
  if(!isLoading, !isError)
    content = videos.map(video => <SingleVedio
      key={video.id}
      video={video}
    />)

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div
          className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
        >

          {content}

        </div>
      </section>
    </section>
  )
}

export default VideoGrid
