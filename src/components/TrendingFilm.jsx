import { Link } from "react-router-dom";

export const TrendingFilm = ({ film: { title, name, id, poster_path } }) => {

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    return (
        <Link to={`/movies/${id}`}>
            <li>
                <img src={IMG_URL + poster_path} alt={title || name} width={90} />
                <h2>{title || name}</h2>
            </li>
        </Link>
    );
};