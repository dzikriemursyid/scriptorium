import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASEURL;
const apiKey = import.meta.env.VITE_API_APIKEY;

export const getPopularMovies = async () => {
  const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  const response = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
  return response.data.results;
};

export const getNowPlayingMovies = async () => {
  const response = await axios.get(`${baseUrl}/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`);
  return response.data.results;
};

export const searchMovies = async (e) => {
  const response = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${e}&language=en-US&page=1`);
  return response.data.results;
};

// Search bar component
// import InputBox from "./components/input-box.jsx";
// const [searchQuery, setSearchQuery] = useState([]);

// const search = async (e) => {
//   const query = await searchMovies(e);
//   setSearchQuery(query);
// };

// <InputBox target={({ target }) => search(target.value)} />

// <MovieList movies={searchQuery} />
