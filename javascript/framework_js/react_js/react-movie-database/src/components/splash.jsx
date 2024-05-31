import { useState, useEffect } from "react";
import { getNowPlayingMovies } from "../script/api";
const imageUrl = "https://image.tmdb.org/t/p/original/";

const Splash = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies().then((data) => {
      setNowPlayingMovies(data);
    });
  }, []);

  const movie = nowPlayingMovies[0];
  const bgImage = `${imageUrl}${movie.backdrop_path}`;

  return (
    <header>
      <style>
        {`
      header {
        background-size: cover;
        background-position: center;
        height: 100vh;
      }
      .hero {
        height: 100%;
        width: 75%;
        margin: auto;
        display: flex;
        align-items: center;
        gap: 4em;
        font-size: 1.2em;
      }
      .hero-img img {
        width: 20vmax;
        border-radius: 1em;
      }
      `}
      </style>
      <div className="hero">
        <div className="hero-details">
          <h1 className="hero-heading"></h1>
          <p className="hero-paragraph"></p>
        </div>
        <div className="hero-img">
          <img src={bgImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Splash;
