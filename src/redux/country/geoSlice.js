// citySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCityData = createAsyncThunk('city/fetchCityData', async (city, { rejectWithValue }) => {
  try {
    const response = await axios.get('https://api.api-ninjas.com/v1/geocoding', {
      params: {
        city,
      },
      headers: {
        'X-Api-Key': 'T4jhMp6jkPwaYLrw2IN+dg==9djzc72tDHZm9ypC',
      },
    });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getCityCoordinates = createAsyncThunk('city/getCityCoordinates', async (capital, country) => {
  try {
    const countryName = country;
    const capitalCityName = capital; // Get the capital city name from the countrySlice state

    // Make the API request to obtain the latitude and longitude for the capital city
    const response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${capitalCityName}&country=${countryName}`, {
      headers: {
        'X-Api-Key': 'T4jhMp6jkPwaYLrw2IN+dg==9djzc72tDHZm9ypC', // Replace with your API key
      },
    });
    return response.data;
  } catch (error) {
    throw error(error.message);
  }
});

const citySlice = createSlice({
  name: 'city',
  initialState: {
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchCityData.rejected, (state, action) => {
        state.data = null;
        state.error = action.payload;
      });
  },
});

export default citySlice.reducer;
