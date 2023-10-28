import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'; // Import PropTypes
import { fetchAirPollutionData } from '../redux/airPollution/airPollutionSlice';
import './air-pollution-details.css';

const AirPollutionDetails = ({ lat, lon }) => {
  const dispatch = useDispatch();
  const apiKey = '36fd611a3b4e63149df10e33e27f421f';
  const airPollutionData = useSelector((state) => state.airPollution.data);

  // Define a function to map the AQI to qualitative names
  const qualitativeName = (aqi) => {
    if (aqi === 1) return 'Good';
    if (aqi === 2) return 'Fair';
    if (aqi === 3) return 'Moderate';
    if (aqi === 4) return 'Poor';
    if (aqi === 5) return 'Very Poor';
    return 'Unknown'; // Handle any other cases
  };

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchAirPollutionData({ lat, lon, apiKey }));
    }
  }, [dispatch, lat, lon, apiKey]);

  return (
    <div className="air-pollution-details">
      <h3>Air Pollution Data</h3>
      {airPollutionData ? (
        <table className="air-pollution-table">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AQI (Air Quality Index)</td>
              <td>{airPollutionData.list[0].main.aqi}</td>
            </tr>
            <tr>
              <td>CO</td>
              <td>
                {airPollutionData.list[0].components.co}
                {' '}
                µg/m³
              </td>
            </tr>
            <tr>
              <td>NO</td>
              <td>
                {airPollutionData.list[0].components.no}
                {' '}
                µg/m³
              </td>
            </tr>
            <tr>
              <td>NO2</td>
              <td>
                {airPollutionData.list[0].components.no2}
                {' '}
                µg/m³
              </td>
            </tr>
            <tr>
              <td>O3</td>
              <td>
                {airPollutionData.list[0].components.o3}
                {' '}
                µg/m³
              </td>
            </tr>
            <tr>
              <td>SO2</td>
              <td>
                {airPollutionData.list[0].components.so2}
                {' '}
                µg/m³
              </td>
            </tr>
            <tr>
              <td>PM2.5</td>
              <td>
                {airPollutionData.list[0].components.pm2_5}
                {' '}
                µg/m³
              </td>
            </tr>
            <tr>
              <td>PM10</td>
              <td>
                {airPollutionData.list[0].components.pm10}
                {' '}
                µg/m³
              </td>
            </tr>
            <tr>
              <td>NH3</td>
              <td>
                {airPollutionData.list[0].components.nh3}
                {' '}
                µg/m³
              </td>
            </tr>
            <tr>
              <td>Qualitative AQI</td>
              <td>{qualitativeName(airPollutionData.list[0].main.aqi)}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No air pollution data available.</p>
      )}
    </div>
  );
};

// Prop validation for lat and lon
AirPollutionDetails.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
};

export default AirPollutionDetails;
