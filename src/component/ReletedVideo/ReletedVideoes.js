import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReletedVideos } from '../../features/reletedVideos/getReletedVideosSlice'
import Loading from '../Loading/Loading'
import SingleVideo from './SingleVideo'

const ReletedVideoes = ({ id, tags }) => {
    const dispatch = useDispatch()
    const video = useSelector(state => state.reletedVideos)
    const { isLoading, isError, reletedVideos } = video
    useEffect(() => {
        dispatch(fetchReletedVideos({ id, tags }))
    }, [dispatch, id, tags])
    let content;
    if (isLoading) content = <Loading />
    if (!isLoading, isError) content = <div>something is error</div>
    if (!isLoading, !isError) {
        content = (
            reletedVideos.map(video => <SingleVideo video={video} />)
        )
    }
    return (
        <div
            class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
        >
            {content}
        </div>
    )
}

export default ReletedVideoes
