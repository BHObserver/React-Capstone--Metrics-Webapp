import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { allCountries } from '../redux/country/allCountriesSlice';
import arrow from './images/enter.png';
import '../App.css';
import { BounceLoader } from 'react-spinners';

const Contents = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.regionalCountries);
  const loading = useSelector((state) => state.countries.loading);

  useEffect(() => {
    if (!countries.length) {
      dispatch(allCountries());
    }
  }, [dispatch, countries]);

  return (
    <>
      {loading ? <BounceLoader color="#fff" loading={loading} size={80} className="bounce-loader" />
        : (
          <ul className="country-list">
            {countries.map((country) => (
              <li className="list-item" key={country.name}>
                <Link to={`details/${country.code}`} className="country-link">
                  <div className="img-container">
                    <img src={country.flag} alt={`flag of ${country.name}`} className="flag-image" />
                    <img className="icon" src={arrow} alt="Right Arrow" />
                  </div>
                  <div className="name-container">
                    <h2 className="country-name">{country.name}</h2>
                    <p className="country-area">
                      Capital:
                      {' '}
                      {country.capital}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
    </>
  );
};

export default Contents;
