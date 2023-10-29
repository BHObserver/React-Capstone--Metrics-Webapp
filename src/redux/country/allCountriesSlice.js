import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState = {
  regionalCountries: [],
  singleCountry: {},
  loading: false,
  error: '',
};

export const allCountries = createAsyncThunk('country/allCountries', async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const { data } = response;
    return data;
  } catch (error) {
    throw error(error.message);
  }
});

export const searchRegion = createAsyncThunk('country/searchRegion', async (region) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw error(error.message);
  }
});

export const countryDetails = createAsyncThunk('country/countryDetails', async (code) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw error(error.message);
  }
});

