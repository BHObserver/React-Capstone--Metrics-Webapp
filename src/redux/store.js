import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/allCountriesSlice';
import airPollutionReducer from './airPollution/airPollutionSlice'; // Import the air pollution reducer
import cityReducer from './country/geoSlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    city: cityReducer,
    airPollution: airPollutionReducer,
  },
});

export default store;
