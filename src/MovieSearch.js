import React, { useState } from "react";
import Movies from "./Movies";
import axios from "axios";
import "font-awesome/css/font-awesome.min.css";

export default function MovieSearch({ defaultMovie }) {
  const [movieName, setMovieName] = useState(defaultMovie);
  const [movieData, setMovieData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setMovieData(response.data.Search);
  }

  function searchMovies() {
    const apiKey = `c032e2d7`;
    let apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchMovies(movieName);
  }

  function updateMovieName(event) {
    setMovieName(event.target.value);
  }
  function load() {
    searchMovies(defaultMovie);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="MovieSearch">
        <div className="container">
          <div className="row text-center">
            <h1>MovieFinder</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search for a movie"
                autoFocus="off"
                autoComplete="off"
                className="form-control"
                onChange={updateMovieName}
              />
              <p>Search </p>
            </form>
          </div>
          <Movies data={movieData} name={movieName} />
        </div>
      </div>
    );
  } else {
    load();
    return <div>LOADING..</div>;
  }
}
