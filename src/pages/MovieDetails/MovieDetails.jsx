import { Suspense } from "react";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { fetchMovieByID } from "moviesAPI";
import { MovieInfo } from "components/MovieInfo/MovieInfo";
import { Loader } from "components/Loader/Loader";
import { AdditionalInfo, ListAdditionalInfo, Title } from "./MovieDetails.styled";

export default function MovieDetails() {
    const { movieID } = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getMovie() {
            try {
                setLoading(true);

                const infoMovie = await fetchMovieByID(movieID);
                setMovie(infoMovie);
                
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            };
        };

        getMovie();

    }, [movieID]);

    return (
        <>
            {loading && <Loader />}

            {movie && <MovieInfo info={movie} />}

            <div>
                <Title>Additional information</Title>
                <ListAdditionalInfo>
                    <AdditionalInfo to="cast">Cast</AdditionalInfo>
                    <AdditionalInfo to="reviews">Reviews</AdditionalInfo>
                </ListAdditionalInfo>

                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </div>
        </>
    );
};