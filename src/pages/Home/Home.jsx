import { Loader } from "components/Loader/Loader";
import { NotFound } from "components/NotFound/NotFound";
import { TrendingList } from "components/TrendingList/TrendingList";
import { fetchTrendingMovies } from "moviesAPI";
import { useEffect, useState } from "react"
import { Title } from "./Home.styled";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getTrendingMovies() {
            try {

                setLoading(true);
                setError(false);

                const trendingMovies = await fetchTrendingMovies();
                setMovies(trendingMovies);
                
            } catch (error) {
                setError(true);
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
            {error && <NotFound />}
            
            <TrendingList moviesList={movies.results} />
        </div>
    );
};