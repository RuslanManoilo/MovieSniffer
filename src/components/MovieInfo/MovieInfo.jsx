import { useLocation } from "react-router-dom";
import { BackLink } from "../BackLink/BackLink";
import { useRef } from "react";

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

            <div>
                <img src={poster_path ? (IMG_URL + poster_path) : defaultImg} alt={title || name} />
                <h2>{title || name}</h2>

                <p>Rating: {vote_average}</p>
                <p>Release date: {release_date}</p>

                <h3>Overview</h3>
                <p>{overview}</p>

                <h3>Genres</h3>
                <p>{genres.map(item => item.name).join(' ')}</p>
            </div>
        </>
    );
};