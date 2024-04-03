import { useState, useEffect } from "react";
import { getPopularMovies, getTopRatedMovies, searchMovies } from "./api";
import InputBox from "./input-box.jsx";
import Card from "./Movie-Card.jsx";
import "./App.css";
const imageUrl = "https://image.tmdb.org/t/p/w500";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopularMovies(data);
    });
    getTopRatedMovies().then((data) => {
      setTopRatedMovies(data);
    });
    // searchMovies("The Matrix");
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-card" key={i}>
          <Card image={`${imageUrl}${movie.poster_path}`} title={movie.title} date={movie.release_date} />
        </div>
      );
    });
  };

  const TopRatedMovieList = () => {
    return topRatedMovies.map((movie, i) => {
      return (
        <div className="movie-card" key={i}>
          <Card image={`${imageUrl}${movie.poster_path}`} title={movie.title} date={movie.release_date} />
        </div>
      );
    });
  };

  return (
    <>
      <h1>Movie Database</h1>
      <InputBox />
      <h2>Popular Movies</h2>
      <div className="popular-movies">
        <PopularMovieList />
      </div>
      <h2>Top Rated</h2>
      <div className="nowplaying-movies">
        <TopRatedMovieList />
      </div>
    </>
  );
}

export default App;
