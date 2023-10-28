import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="details/:code" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
