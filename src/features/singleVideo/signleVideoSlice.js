import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getSingleVideo } from "./singleVideoApi";


const initialState = {
    isLoading: false,
    video: {},
    isError: false,
    errorMsg: ''
}

export const fetchSingleVideo = createAsyncThunk(
    'tag/fetchSingleVideo',
    async (id) => {
        const video = await getSingleVideo(id)
        return video;
    })

const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingleVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchSingleVideo.fulfilled, (state, action) => {
                state.isError = false;
                state.video = action.payload;
                state.isLoading = false
            })
            .addCase(fetchSingleVideo.rejected, (state, action) => {
                state.isError = true;
                state.video = {}
                state.isLoading = false
                state.errorMsg = action.error.message
            })
    }
})

export default videoSlice.reducer;