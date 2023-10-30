import { ImagesGallery } from "components/MoviesList/MoviesList.styled";
import { MovieShortDetails } from "../MovieShortDetails/MovieShortDetails";

export const TrendingList = ({ moviesList: movies }) => {
    return (
        <ImagesGallery>
            {movies ?
                movies.map(item => (<MovieShortDetails key={item.id} movie={item} />))
                : null}
        </ImagesGallery>
    );
};