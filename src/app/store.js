import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/video/videoSlice'
import tagReducer from '../features/tags/tagSlice';

export const store = configureStore({
  reducer: {
    videos : videoReducer,
    tags : tagReducer
  },
});
