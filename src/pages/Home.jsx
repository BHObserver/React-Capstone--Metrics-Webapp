import Continent from '../components/Continents';
import Contents from '../components/Contents';
import map from '../components/images/map.png';
import '../App.css'

const Home = () => (
  <>
    <div className="map-container">
      <img src={map} alt="Map" />
    </div>
    <div className="continent">
      <Continent />
    </div>
    <div className="content-container">
      <Contents />
    </div>
  </>
);

export default Home;
