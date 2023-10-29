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

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    getRegion: (state, action) => {
      state.region = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(allCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.regionalCountries = action.payload.map((country) => ({
          name: country.name.common,
          area: country.area,
          capital: country.capital,
          code: country.cca3,
          flag: country.flags.svg,
          official: country.name.official,
        }));
        state.error = '';
      })
      .addCase(allCountries.rejected, (state, action) => {
        state.loading = false;
        state.regionalCountries = [];
        state.error = action.payload;
      })
      .addCase(searchRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.regionalCountries = action.payload.map((country) => ({
          name: country.name.common,
          area: country.area,
          capital: country.capital,
          code: country.cca3,
          flag: country.flags.svg,
          official: country.name.official,
        }));
        state.error = '';
      })
      .addCase(searchRegion.rejected, (state, action) => {
        state.loading = false;
        state.regionalCountries = [];
        state.error = action.payload;
      })
      .addCase(countryDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(countryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.singleCountry = {
          name: action.payload[0].name.common,
          area: action.payload[0].area,
          capital: action.payload[0].capital,
          flag: action.payload[0].flags.svg,
          region: action.payload[0].region,
          subregion: action.payload[0].subregion,
          population: action.payload[0].population,
          timezones: action.payload[0].timezones[0],
          startOfWeek: action.payload[0].startOfWeek,
          official: action.payload[0].name.official,
        };
        state.error = '';
      })
      .addCase(countryDetails.rejected, (state, action) => {
        state.loading = false;
        state.singleCountry = [];
        state.error = action.payload;
      });
  },
});

export default countrySlice.reducer;
