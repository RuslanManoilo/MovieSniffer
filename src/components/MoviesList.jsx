import { MovieShortDetails } from "./MovieShortDetails";

export const MoviesList = ({ movies }) => {
    return (
        <ul>
            {movies ?
                movies.map(item => (<MovieShortDetails key={item.id} film={item} />))
                : null}
        </ul>
    );
};