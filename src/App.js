import logo from './logo.svg';
import './App.css';
import Movies from './Movies';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Nominated from './Nominated';

// TODO: set up routes to see nominated
//       save nominated movies n ids to localStorage

const App = () => {
  const APP_ID = "a145ad87";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('fast'); // default values
  const [year, setYear] = useState('2021'); // default values

  useEffect( () => {
    GetMovies();
  }, [query]);

  const GetMovies = async () => {
    const response = await fetch(`http://www.omdbapi.com/?s=${query}&y=${year}&type=movie&apikey=${APP_ID}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    //console.log(search);
  };

  const updateSearchYear = e => {
    e.preventDefault();
    setYear(e.target.value);
    console.log(year);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setYear(year);
    setSearch('');
  };

  return(
    <div className="App">
      
      <Router>
        <Nav />
        <Switch>
          <Route path="/nominated" component={Nominated}/>
        </Switch>
      </Router>

      <h1 className="title">THE SHOPPIES</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <input className="search-bar-year" type="text" value={year} onChange={updateSearchYear} />
          <button className="search-button" type="submit">
            Search
          </button>
      </form>
      <div className="Movies">
      {movies.map(movie => (
        <Movies 
        key={movie.Title}
        title={movie.Title}
        image={movie.Poster}
        year={movie.Year}
        nominates={false}/>
      ))}
      </div>
    </div>
  );
};

export default App;
