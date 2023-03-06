import React from 'react'
import ReletedVideoes from '../component/ReletedVideo/ReletedVideoes'
import Player from '../component/Video/Player'
import VideoDescription from '../component/Video/VideoDescription'

const Video = () => {
    return (
        <>
            <section class="pt-6 pb-20">
                <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                    <div class="grid grid-cols-3 gap-2 lg:gap-8">
                        <div class="col-span-full w-full space-y-8 lg:col-span-2">
                           <Player/>

                           <VideoDescription/>
                        </div>

                        <ReletedVideoes/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video
