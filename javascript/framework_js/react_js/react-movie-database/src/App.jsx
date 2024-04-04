import { useState, useEffect } from "react";
import { getPopularMovies, getTopRatedMovies, searchMovies } from "./api";
import InputBox from "./input-box.jsx";
import Card from "./Movie-Card.jsx";
import "./App.css";
const imageUrl = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies }) => {
  return movies.map((movie, i) => (
    <div className="movie-card" key={i}>
      <Card image={`${imageUrl}${movie.poster_path}`} title={movie.title} date={movie.release_date} />
    </div>
  ));
};

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      setPopularMovies(data);
    });
    getTopRatedMovies().then((data) => {
      setTopRatedMovies(data);
    });
  }, []);

  const search = async (e) => {
    const query = await searchMovies(e);
    setSearchQuery(query);
  };

  return (
    <>
      <h1>Movie Database</h1>
      <InputBox target={({ target }) => search(target.value)} />
      <div className="movies-container">
        <MovieList movies={searchQuery} />
      </div>
      <h2>Popular Movies</h2>
      <div className="movies-container">
        <MovieList movies={popularMovies} />
      </div>
      <h2>Top Rated</h2>
      <div className="movies-container">
        <MovieList movies={topRatedMovies} />
      </div>
    </>
  );
}

export default App;
