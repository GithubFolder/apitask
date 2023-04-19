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


export const AddDataThunkApi = createAsyncThunk(
  'addData',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://20.204.122.192:8080/stlap/add-exist-loan", payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);



export const DeleteThunkApi = createAsyncThunk(
  'deleteData',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://20.204.122.192:8080/stlap/delete-exist-loan", payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const GetThunkApi = createAsyncThunk(
  'getData',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://20.204.122.192:8080/stlap/get-exist-loan-by-id", payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


export const UpdateThunkApi = createAsyncThunk(
  'updateData',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post("http://20.204.122.192:8080/stlap/update-exist-loan", payload);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);




