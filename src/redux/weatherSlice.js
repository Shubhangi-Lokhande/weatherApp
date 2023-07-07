import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_KEY } from '../utils/common';

const initialState = {
    loading: false,
    data:[],
    error:''
}

export const fetchWeatherAction = createAsyncThunk('weather/fetch', async (payload)=>{
    return await axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${API_KEY}`)
    .then(res => res.data)
})

const weatherSlice = createSlice({
    name:'weather',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(fetchWeatherAction.pending, (state)=>{
            state.loading = true;
        }),
        builder.addCase(fetchWeatherAction.fulfilled, (state, action)=>{
            state.loading = false,
            state.data = action.payload,
            state.error = ''
        }),
        builder.addCase(fetchWeatherAction.rejected, (state, action)=>{
            state.loading = false,
            state.data = [],
            state.error = action.error.message
        })
    }
   
});
export default weatherSlice.reducer;