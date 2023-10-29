import { Link, useLocation } from "react-router-dom";

export const MovieShortDetails = ({ movie: { title, name, id, poster_path } }) => {

    const location = useLocation();
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const defaultImg = 'https://www.reelviews.net/resources/img/default_poster.jpg';

    return (
        <Link to={`/movies/${id}`} state={{ from: location }} >
            <li>
                <img src={poster_path ? (IMG_URL + poster_path) : defaultImg} alt={title || name} width={90} />
                <h2>{title || name}</h2>
            </li>
        </Link>
    );
};