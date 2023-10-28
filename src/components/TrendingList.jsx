import { MovieDetails } from "./MovieDetails";

export const TrendingList = ({ films }) => {
    return (
        <ul>
            {films ?
                films.map(item => (<MovieDetails key={item.id} film={item} />))
                : null}
        </ul>
    );
};