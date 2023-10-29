import { MovieInfo } from "components/MovieInfo";
import { fetchFilmByID } from "moviesAPI";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function MovieDetails() {
    const { movieID } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        async function getFilm() {
            try {
                const infoMovie = await fetchFilmByID(movieID);
                setMovie(infoMovie);
            } catch (error) {
                
            } finally {

            }
        };

        getFilm();

    }, [movieID]);

    return (
        <div>
            {movie && <MovieInfo info={movie} />}

            <h2>Additional information</h2>

            <ul>
                <Link to="cast">Cast</Link>
                
                <li>Review</li>
            </ul>

            <Outlet />

        </div>
    );
};