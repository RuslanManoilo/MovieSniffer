import { TrendingList } from "components/TrendingList";
import { fetchTrendingFilms } from "moviesAPI";
import { useEffect, useState } from "react"

export default function Home() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        async function getTrendingFilms() {
            try {
                const trendingFilms = await fetchTrendingFilms();
                setFilms(trendingFilms);
            } catch (error) {
                
            } finally {

            }

        }

        getTrendingFilms();
    }, []);
    
    return (
        <div>
            <h1>TRENDING TODAY</h1>
            <TrendingList films={films.results} />
        </div>
    )
};