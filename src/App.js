import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home'
import Sliderdata from './Component/Sliderdata'
function App() {
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Home />} />     
        <Route exact path='sliderdata/:sessionid/:vehicleid' element={<Sliderdata/>} />
     
    </Routes>

    </BrowserRouter>
  );
}

export default App;
