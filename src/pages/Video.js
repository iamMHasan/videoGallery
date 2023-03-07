import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../component/Loading/Loading'
import ReletedVideoes from '../component/ReletedVideo/ReletedVideoes'
import Player from '../component/Video/Player'
import VideoDescription from '../component/Video/VideoDescription'
import { fetchSingleVideo } from '../features/singleVideo/signleVideoSlice'
import { getSingleVideo } from '../features/singleVideo/singleVideoApi'

const Video = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const video = useSelector(state => state.video)
    const { isLoading, isError, video: singleVideo } = video
    useEffect(() => {
        dispatch(fetchSingleVideo(id))
    }, [dispatch, id])

    let content;
    if (isLoading) content = <Loading />
    if (isError) content = <div>something is error</div>
    if (!isLoading, !isError) {
        content = (
            <div class="grid grid-cols-3 gap-2 lg:gap-8">
                <div class="col-span-full w-full space-y-8 lg:col-span-2">
                    <Player link = {singleVideo.link} title = {singleVideo.title}/>

                    <VideoDescription video={singleVideo}/>
                </div>

                <ReletedVideoes id={singleVideo.id} tags={singleVideo.tags} />
            </div>
        )
    }
    return (
        <>
            <section class="pt-6 pb-20">
                <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    {content}
                </div>
            </section>
        </>
    )
}

export default Video
