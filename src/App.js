import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material'
// import Header from './Header'
import Head from './Head';
import MovieContainer from './Component/MovieContainer';
import Movie from './Component/Movie';

function App() {
  return (
    <div className='App'>
      <Head />
      <Movie />
    </div>


  );
}

export default App;
