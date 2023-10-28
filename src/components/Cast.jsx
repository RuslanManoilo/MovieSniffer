import { fetchMovieCredits } from "moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {
    const params = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function getMovieCredits() {
            try {
                const castMovie = await fetchMovieCredits(params.moviesID);
                setCast(castMovie);
                console.log(castMovie);
            } catch (error) {
                
            } finally {

            }
        };

        getMovieCredits();
        
    }, [params.moviesID]);

    return (
        <div>
            {cast.length > 0 && (<div>Test</div>)}
        </div>
    )
};