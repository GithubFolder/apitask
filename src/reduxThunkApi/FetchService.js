import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { SERVICE_URL } from '../service/seriveUrl';

export const FetchDataThunkApi = createAsyncThunk(
  'fetchData',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://20.204.122.192:8080/stlap/fetch-existing-loans", payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);