import { Link, useLocation } from "react-router-dom";

export const MovieShortDetails = ({ film: { title, name, id, poster_path } }) => {

    const location = useLocation();
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <Link to={`/movies/${id}`} state={{ from: location }} >
            <li>
                <img src={IMG_URL + poster_path} alt={title || name} width={90} />
                <h2>{title || name}</h2>
            </li>
        </Link>
    );
};