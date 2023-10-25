export const FilmInfo = ({
    info: {
        title,
        poster_path,
        release_date,
        vote_average,
        overview,
        name,
        genres }
}) => {
    
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            <img src={IMG_URL + poster_path} alt={title || name} />
            <h2>{title || name}</h2>
            <p>Rating: {vote_average}</p>
            <p>Release date: {release_date}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(item => item.name).join(' ')}</p>
        </div>
    );
};