// airPollutionSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAirPollutionData = createAsyncThunk(
  'airPollution/fetchAirPollutionData',
  async ({ lat, lon, apiKey }) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      );
      return response.data;
    } catch (error) {
      throw error(error.message);
    }
  },
);

const airPollutionSlice = createSlice({
  name: 'airPollution',
  initialState: {
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirPollutionData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAirPollutionData.rejected, (state, action) => {
        state.data = null;
        state.error = action.payload;
      });
  },
});

export default airPollutionSlice.reducer;
