import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {jobService} from "../../services";

let initialState = {
    allJobs: [],
    oneJob: null,
    currentPage:1,
    totalPages: 0
}

const getAllJobs = createAsyncThunk(
  'jobSlice/getAllJobs' ,
    async (_, {rejectWithValue}) => {
      try {
          const {data} = await jobService.getAllJobs();
          return data
      } catch (e) {
          rejectWithValue(e.response.data)
      }
    }
);

const jobSlice = createSlice({
    name: 'jobSlice',
    initialState,
    reducers: {

    },
    extraReducers: builder =>
        builder
            .addCase(getAllJobs.fulfilled, (state, action) => {
                state.allJobs = action.payload
            })
});

const {reducer: jobReducer} = jobSlice;

const jobActions = {
    getAllJobs
}

export {
    jobReducer,
    jobActions
}