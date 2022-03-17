import './App.css';
import { Route, Routes } from 'react-router-dom';
import Starships from './pages/Starships/Starships';
import StarshipPage from './pages/StarshipPage/StarshipPage';


function App() {
  return (
    <>
      <h1>STAR WARS ENTERPRISE</h1>
      <Routes>
        <Route path='' element={<Starships />} />
        <Route path='/starship' element={<StarshipPage />} />
      </Routes>
    </>
  );
}

export default App;
