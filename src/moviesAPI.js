import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = "fc9b2ba3c1d7d66208afaa93dbd87a11";


export const fetchTrendingMovies = async () => {
    const responce = await axios.get(`trending/all/week?api_key=${KEY}`);
    return responce.data;
};

export const fetchMovieByID = async (movieID) => {
    const responce = await axios.get(`movie/${movieID}?api_key=${KEY}`);
    return responce.data;
};

export const fetchSearchMovies = async (query) => {
    const responce = await axios.get(`search/movie?api_key=${KEY}&query=${query}`);
    return responce.data.results;
};

export const fetchMovieCredits = async (movieID) => {
    const responce = await axios.get(`movie/${movieID}/credits?api_key=${KEY}`);
    return responce.data.cast;
};

export const fetchMovieReviews = async (movieID) => {
    const responce = await axios.get(`movie/${movieID}/reviews?&page=1&api_key=${KEY}`);
    return responce.data.results;
};