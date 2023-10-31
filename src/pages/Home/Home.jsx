import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { fetchTrendingMovies } from "moviesAPI";
import { useEffect, useState } from "react"
import { Title } from "./Home.styled";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getTrendingMovies() {
            try {
                setLoading(true);

                const trendingMovies = await fetchTrendingMovies();
                setMovies(trendingMovies);
                
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            };
        };

        getTrendingMovies();

    }, []);
    
    return (
        <div>
            <Title>TRENDING TODAY</Title>

            {loading && <Loader />}
            
            <MoviesList movies={movies.results} />
        </div>
    );
};