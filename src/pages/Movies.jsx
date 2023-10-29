import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchBar } from "components/SearchBar";
import { fetchSearchFilms } from "moviesAPI";
import { MoviesList } from "components/MoviesList";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();
    
    const query = searchParams.get("query") ?? '';
    
    useEffect(() => {
        async function getSearchFilms() {
            try {

                if (query === '') {
                    setMovies({});
                    return;
                };

                const foundFilms = await fetchSearchFilms(query);
                setMovies(foundFilms);

            } catch (error) {
                
            } finally {

            }
        }

        getSearchFilms();

    }, [query]);


    return (
        <div>
            <SearchBar />
            {movies.length > 0 && <MoviesList movies={movies} />}
        </div>
    );
};