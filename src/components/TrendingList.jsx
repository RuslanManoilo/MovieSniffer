import { MovieShortDetails } from "./MovieShortDetails";

export const TrendingList = ({ films }) => {
    return (
        <ul>
            {films ?
                films.map(item => (<MovieShortDetails key={item.id} film={item} />))
                : null}
        </ul>
    );
};