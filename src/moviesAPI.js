import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = "fc9b2ba3c1d7d66208afaa93dbd87a11";


export const fetchTrendingFilms = async () => {
    const responce = await axios.get(`trending/all/week?api_key=${KEY}`);
    return responce.data;
};

export const fetchFilmByID = async (movieID) => {
    const responce = await axios.get(`movie/${movieID}?api_key=${KEY}`);
    return responce.data;
};

export const fetchSearchFilms = async (query) => {
    const responce = await axios.get(`search/movie?api_key=${KEY}&query=${query}`);
    return responce.data.results;
};

export const fetchMovieCredits = async (ID) => {
    const responce = await axios.get(`movie/${ID}/credits?api_key=${KEY}`);
    return responce.data.cast;
};