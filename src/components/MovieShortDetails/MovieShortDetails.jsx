import { Link, useLocation } from "react-router-dom";
import { GalleryItem, ItemImage, ItemTitle } from "./MovieShortDetails.styled";

export const MovieShortDetails = ({ movie: { title, name, id, poster_path } }) => {

    const location = useLocation();
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const defaultImg = 'https://www.reelviews.net/resources/img/default_poster.jpg';

    return (
        <GalleryItem>
            <Link to={`/movies/${id}`} state={{ from: location }} >
                <ItemImage src={poster_path ? (IMG_URL + poster_path) : defaultImg} alt={title || name} />
                <ItemTitle>{title || name}</ItemTitle>
            </Link>
        </GalleryItem>
    );
};