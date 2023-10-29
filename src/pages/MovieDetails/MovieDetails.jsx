import { Suspense } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieByID } from "moviesAPI";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { Loader } from "components/Loader/Loader";
import { NotFound } from "components/NotFound/NotFound";

export default function MovieDetails() {
    const { movieID } = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getMovie() {
            try {

                setLoading(true);
                setError(false);

                const infoMovie = await fetchMovieByID(movieID);
                setMovie(infoMovie);
                
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            };
        };

        getMovie();

    }, [movieID]);

    return (
        <>
            {loading && <Loader />}
            {error && <NotFound />}

            {movie && <MovieInfo info={movie} />}

            <div>
                <h2>Additional information</h2>
                <ul>
                    <Link to="cast">Cast</Link>
                    <Link to="reviews">Reviews</Link>
                </ul>

                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
};