import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchRegion } from '../redux/country/allCountriesSlice';

const Continent = () => {
  const [region, setRegion] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (region !== '') {
      dispatch(searchRegion(region));
    }
  }, [dispatch, region]);

  return (
    <>
      <div className="continent-container">
        <div className="input-wrapper">
          <select
            type="text"
            name="region"
            value={region}
            className="select"
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="">View by Region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Continent;
