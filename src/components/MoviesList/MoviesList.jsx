import { MovieShortDetails } from "../MovieShortDetails/MovieShortDetails";
import { ImagesGallery } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    return (
        <ImagesGallery>
            {movies ?
                movies.map(item => ( <MovieShortDetails key={item.id} movie={item} /> ))
                : null}
        </ImagesGallery>
    );
};