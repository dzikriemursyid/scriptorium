import { useState, useEffect } from "react";
import { getPopularMovies, getTopRatedMovies, searchMovies } from "./script/api.js";
import Splash from "./components/splash.jsx";
import MovieList from "./components/movie-list.jsx";
import "./styles/App.css";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopularMovies(data);
    });
    getTopRatedMovies().then((data) => {
      setTopRatedMovies(data);
    });
  }, []);

  return (
    <>
      <Splash />
      <main>
        <h2>Popular Movies</h2>
        <MovieList movies={popularMovies} />
        <h2>Top Rated</h2>
        <MovieList movies={topRatedMovies} />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
