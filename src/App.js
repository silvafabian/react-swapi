import './App.css';
import { Route, Routes } from 'react-router-dom';
import Starships from './pages/Starships/Starships';


function App() {
  return (
    <>
      <h1>STAR WARS ENTERPRISE</h1>
      <Routes>
        <Route path='' element={<Starships />} />
      </Routes>
    </>
  );
}

export default App;
