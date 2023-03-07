import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getReletedVideos } from "./getReletedVideosApi";


const initialState = {
    isLoading: false,
    reletedVideos: [],
    isError: false,
    errorMsg: ''
}

export const fetchReletedVideos = createAsyncThunk(
    'reletedVideos/fetchReletedVideos',
    async ({id, tags}) => {
        const reletedVideos = await getReletedVideos({id, tags})
        return reletedVideos;
    })

const videoSlice = createSlice({
    name: 'reletedVideos',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchReletedVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchReletedVideos.fulfilled, (state, action) => {
                state.isError = false;
                state.reletedVideos = action.payload;
                state.isLoading = false
            })
            .addCase(fetchReletedVideos.rejected, (state, action) => {
                state.isError = true;
                state.reletedVideos = []
                state.isLoading = false
                state.errorMsg = action.error.message
            })
    }
})

export default videoSlice.reducer;