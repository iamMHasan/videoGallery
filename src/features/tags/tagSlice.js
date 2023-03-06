import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagApi";

const initialState = {
    isLoading: false,
    tags: [],
    isError: false,
    errorMsg: ''
}

export const fetchTags = createAsyncThunk(
    'tag/fetchTags',
    async () => {
        const videoes = await getTags()
        return videoes;
    })

const videoSlice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTags.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTags.fulfilled, (state, action) => {
                state.isError = false;
                state.tags = action.payload;
                state.isLoading = false
            })
            .addCase(fetchTags.rejected, (state, action) => {
                state.isError = true;
                state.tags = []
                state.isLoading = false
                state.errorMsg = action.error.message
            })
    }
})

export default videoSlice.reducer;