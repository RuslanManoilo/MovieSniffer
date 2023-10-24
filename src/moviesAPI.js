import axios from 'axios';

export const fetchFilms = async () => {
    const MAIN_URL = "https://api.themoviedb.org/3/";
    const KEY = "fc9b2ba3c1d7d66208afaa93dbd87a11";

    const responce = await axios.get(`${MAIN_URL}${KEY}`);
    console.log(responce);
    return responce.data;
};