import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { getCityCoordinates } from '../redux/country/geoSlice'; // Import the action to fetch lon and lat
import { countryDetails } from '../redux/country/allCountriesSlice'; // Import the action to fetch country details
import AirPollutionDetails from '../components/AirPollutionDetails';

const Details = () => {
  const dispatch = useDispatch();
  const { code } = useParams();
  const cityData = useSelector((state) => state.countries.singleCountry.capital);

  const loading = useSelector((state) => state.city.loading);

  const [capitalDetails, setCapitalDetails] = useState(null);
  const [hasLogged, setHasLogged] = useState(false);

  useEffect(() => {
    if (code && !hasLogged) {
      dispatch(countryDetails(code)).then((resultAction) => {
        if (resultAction.type === countryDetails.fulfilled.type) {
          const country = resultAction.payload;
          const countryName = country[0].name;
          const capitalCityName = country[0].capital[0];

          dispatch(getCityCoordinates(capitalCityName, countryName)).then((lonLatAction) => {
            const data = lonLatAction.payload[0];
            if (lonLatAction.type === getCityCoordinates.fulfilled.type) {
              setCapitalDetails({
                name: capitalCityName,
                latitude: data.latitude,
                longitude: data.longitude,
              });
            }
          });
          setHasLogged(true);
        }
      });
    }
  }, [dispatch, code, cityData, hasLogged]);

  return (
    <>
      <Link to="/" className="back-btn">
        <BsFillArrowLeftCircleFill />
      </Link>
      {loading ? (
        <BounceLoader color="#f47b11" loading={loading} size={80} className="bounce-loader" />
      ) : (
        <div className="capital-details">
          {capitalDetails && (
            <>
              <h2 className="capital-name">{capitalDetails.name}</h2>
              <div className="capital-latlon">
                <span>
                  Latitude:&nbsp;
                  {capitalDetails.latitude.toFixed(2)}
                </span>
                <span>
                  Longitude:&nbsp;
                  {capitalDetails.longitude.toFixed(2)}
                </span>
              </div>
              <AirPollutionDetails lat={capitalDetails.latitude} lon={capitalDetails.longitude} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Details;
