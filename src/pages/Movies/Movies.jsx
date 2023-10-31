import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "moviesAPI";
import { SearchBar } from "components/SearchBar/SearchBar";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    
    const query = searchParams.get("query") ?? '';
    
    useEffect(() => {
        async function getSearchMovies() {
            try {
                setLoading(true);

                const foundMovies = await fetchSearchMovies(query);
                setMovies(foundMovies);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            };
        };

        getSearchMovies();

    }, [query]);


    return (
        <div>
            <SearchBar />

            {loading && <Loader />}
            <ToastContainer />

            {movies.length > 0 && <MoviesList movies={movies} />}
        </div>
    );
};