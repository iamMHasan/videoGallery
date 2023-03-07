import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/video/videoSlice'
import tagReducer from '../features/tags/tagSlice';
import singleVideoReducer from '../features/singleVideo/signleVideoSlice';
import reletedVideosReducer from '../features/reletedVideos/getReletedVideosSlice'

export const store = configureStore({
  reducer: {
    videos : videoReducer,
    tags : tagReducer,
    video : singleVideoReducer,
    reletedVideos : reletedVideosReducer
  },
});
