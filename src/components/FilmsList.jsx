import { MovieDetails } from "./MovieDetails";

export const FilmsList = ({ movies }) => {
    return (
        <ul>
            {movies ?
                movies.map(item => (<MovieDetails key={item.id} film={item} />))
                : null}
        </ul>
    );
};