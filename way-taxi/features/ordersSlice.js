import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let axiosConfig1 = {
  headers: {
    "Content-Type": "application/json"
  },
};




export const FetchOrders = createAsyncThunk(
  "orders/fetch",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const response = await axios.get("http://localhost:4000/users/orders");
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const PostOrders = createAsyncThunk(
  "orders/post",
  async ({ from, to }, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      const order = await axios.post("http://localhost:4000/users/order", { from, to}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.user.token}`,}
        })
      const data = await order.data
      return data
    } catch (error) {
      thunkAPI.rejectWithValue(error.message)
    }
  }
)


export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchOrders.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});

export default ordersSlice.reducer;
