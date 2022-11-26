import './App.css';
import Homepage from './Components/Homepage';
import { Routes, Route } from "react-router-dom";
import Upcoming from './Components/Upcoming';
import TopRated from './Components/TopRated';
import Navbar from './Components/Navbar';
import SingelMoviepage from './Components/SingelMoviepage';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/toprated' element={<TopRated />} />
        <Route exact path='/upcoming' element={<Upcoming />} />
        <Route exact path='/singelmoviepage/:id' element={<SingelMoviepage />} />
      </Routes>
    </div>
  );
}

export default App;
