import { FilmInfo } from "components/FilmInfo";
import { fetchFilmByID } from "moviesAPI";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function MovieDetails() {
    const params = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        async function getFilm() {
            try {
                const infoMovie = await fetchFilmByID(params.moviesID);
                setMovie(infoMovie);
            } catch (error) {
                
            } finally {

            }
        };

        getFilm();

    }, [params.moviesID]);

    return (
        <div>
            {movie && <FilmInfo info={movie} />}

            <h2>Additional information</h2>

            <ul>
                <Link to="cast">Cast</Link>
                
                <li>Review</li>
            </ul>

            <Outlet />

        </div>
    )
}