import { MovieShortDetails } from "./MovieShortDetails";

export const FilmsList = ({ movies }) => {
    return (
        <ul>
            {movies ?
                movies.map(item => (<MovieShortDetails key={item.id} film={item} />))
                : null}
        </ul>
    );
};