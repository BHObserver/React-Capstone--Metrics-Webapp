/* import { useDispatch, useSelector } from 'react-redux';
import { fetchCityData, getCityCoordinates } from '../redux/country/geoSlice'; // Import your actions
import { useEffect } from 'react';

function CityComponent() {
  const dispatch = useDispatch();
  const cityData = useSelector((state) => state.city.data);
  // Dispatch the fetchCityData action
  useEffect(() => {
    dispatch(fetchCityData('london'));
  }, [dispatch]);

  // Dispatch the getCityCoordinates action
  useEffect(() => {
    dispatch(getCityCoordinates());
  }, [dispatch]);

  // Log the cityData to verify it
  console.log('City Data:', cityData);

  return (
    <div></div>
  );
}

export default CityComponent; */
