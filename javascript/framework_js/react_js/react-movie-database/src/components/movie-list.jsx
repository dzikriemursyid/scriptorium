import Card from "./movie-card.jsx";
const imageUrl = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies }) => {
  return (
    <div className="movies-container">
      <style>
        {`
        .movies-container {
          overflow: scroll;
          display: flex;
        }
        `}
      </style>
      {movies.map((movie, i) => (
        <div className="movie-card" key={i}>
          <Card image={`${imageUrl}${movie.poster_path}`} title={movie.title} date={movie.release_date} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
