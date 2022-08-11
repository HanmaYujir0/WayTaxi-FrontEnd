import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ratingPost = createAsyncThunk("rating/post", async ({taxi, star}, thunkAPI) => {
    try {
        const response = await axios.patch(`http://localhost:4000/users/rating/${taxi.taxiId}`, {star})
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
});


export const getRating = createAsyncThunk("rating/get", async (user, thunkAPI) => {
    try {
        const response = await axios.get(`http://localhost:4000/users/rating/${user.userId}`)
        return response.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.message)
    }
})

// export const commentPost = createAsyncThunk("comments/post", async (_, thunkAPI) => {
//     try {
//         const response = await axios.post("http://localhost:4000/")
//     } catch (error) {
        
//     }
// })
//k'dkvfkv'dfk'pdf'vd'fv'df

export const ratingAndCommnet = createSlice({
    name: "ratingAndComments",
    initialState: {
        rating: 0,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ratingPost.fulfilled, (state, action) => {
            state.rating = action.payload
        })
        builder.addCase(getRating.fulfilled, (state, action) => {
            state.rating = action.payload
        })
    }
})

export default ratingAndCommnet.reducer