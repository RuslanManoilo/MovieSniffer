import { TrendingFilm } from "./TrendingFilm";

export const TrendingList = ({ films }) => {
    return (
        <ul>
            {films ?
                films.map(item => (<TrendingFilm key={item.id} film={item} />))
                : null}
        </ul>
    );
};