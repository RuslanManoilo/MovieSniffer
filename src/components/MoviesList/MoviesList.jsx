import { MovieShortDetails } from "../MovieShortDetails/MovieShortDetails";

export const MoviesList = ({ movies }) => {
    return (
        <ul>
            {movies ?
                movies.map(item => ( <MovieShortDetails key={item.id} movie={item} /> ))
                : null}
        </ul>
    );
};