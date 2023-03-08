import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videoApi"

const initialState = {
    isLoading: false,
    videos: [],
    isError: false,
    errorMsg: ''
}

export const fetchVideoes = createAsyncThunk(
    'video/fetchVideos',
    async ({tags, search}) => {
        const videoes = await getVideos(tags, search)
        return videoes;
    })

const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideoes.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideoes.fulfilled, (state, action) => {
                state.isError = false;
                state.videos = action.payload;
                state.isLoading = false
            })
            .addCase(fetchVideoes.rejected, (state, action) => {
                state.isError = true;
                state.videos = []
                state.isLoading = false
                state.errorMsg = action.error.message
            })
    }
})

export default videoSlice.reducer;