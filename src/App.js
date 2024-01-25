// import logo from './logo.svg';
import './App.css';
// import { Button } from '@mui/material'
// import Header from './Header'
import {Head} from './Head.jsx'
// import MovieContainer from './Component/MovieContainer';
import Movie from './Component/Movie';
import {Routes,Route} from 'react-router-dom'
import BollyWood from './BollyWood'
import HollyWood from './Hollywood.jsx';
import NavBar from './NavBar.jsx';
import Favcart from './Favcart.jsx';
import { useEffect } from 'react';
import MovieInput from './MovieInput.jsx';
import MovieOutput from './MovieOutput.jsx';

function App() {
  
  return (
    <div className='App'>
        <NavBar />
        
        <Routes>
            <Route path="/" element={<Head />} />
            <Route path ="/bollywood" element={<BollyWood />} />
            <Route path ="/hollywood" element={<HollyWood />} />
            <Route path ="/favourite" element={<Favcart />} />
            <Route path ="/input" element={<MovieInput />} />
            {/* <Route path ="/output" element={<MovieOutput />} /> */}
            
        </Routes>
        
    </div>


  );
}

export default App;
