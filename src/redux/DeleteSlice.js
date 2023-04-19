import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
// import axios from "axios";





const deleteSlice = createSlice({
  name : 'delete',
    initialState:{
        data:[],
        loading:false,
    },
    extraReducers:{
        [deleteSlice.pending]:(state,action) => {
        // [FetchDataThunkApi.pending]:(state,action) => {
            state.loading = true;
        },
        [deleteSlice.fulfilled]:(state,action) => {
            // [FetchDataThunkApi.fulfilled]:(state,action) => {
            console.log(action);
            state.loading = false;
            state.data = action.payload;
        },
        [deleteSlice.rejected]:(state,action) => {
            // [FetchDataThunkApi.rejected]:(state,action) => {
            state.loading = false;
        },
    },
})

export default fetchSlice.reducer;