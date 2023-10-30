import { useLocation } from "react-router-dom";
import { BackLink } from "../BackLink/BackLink";
import { useRef } from "react";
import { MovieCard, MovieDesc, MovieImage, Overview, Subtitle, Title } from "./MovieInfo.styled";

export const MovieInfo = ({
    info: {
        title,
        poster_path,
        release_date,
        vote_average,
        overview,
        name,
        genres }
}) => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const defaultImg = 'https://www.reelviews.net/resources/img/default_poster.jpg';


    return (
        <>
            <BackLink to={backLinkLocationRef.current} />

            <MovieCard>
                <MovieImage
                    src={poster_path ? (IMG_URL + poster_path) : defaultImg}
                    alt={title || name}
                />

                <MovieDesc>
                    <Title>{title || name}</Title>

                    <p>Rating: {vote_average}</p>
                    <p>Release date: {release_date}</p>

                    <Subtitle>Overview</Subtitle>
                    <Overview>{overview}</Overview>

                    <Subtitle>Genres</Subtitle>
                    <p>{genres.map(item => item.name).join(' ')}</p>
                </MovieDesc>
            </MovieCard>
        </>
    );
};