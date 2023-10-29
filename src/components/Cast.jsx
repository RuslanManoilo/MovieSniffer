import { fetchMovieCredits } from "moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Cast = () => {
    const { movieID } = useParams();
    const [cast, setCast] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const visibleCast = showAll ? cast : cast.slice(0, 15);

    useEffect(() => {
        async function getMovieCredits() {
            try {
                const castMovie = await fetchMovieCredits(movieID);
                setCast(castMovie);
                console.log(castMovie);
            } catch (error) {
                
            } finally {

            }
        };

        getMovieCredits();
        
    }, [movieID]);

    const handlerShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            <ul>
                {visibleCast.length > 0 && (
                    visibleCast.map(item => (
                        <li key={item.id}>
                            <img src={IMG_URL + item.profile_path} alt={item.name} width={90} />
                            <h3>{item.name}</h3>
                            <p>Character: {(item.character === "" ? "Other" : item.character)}</p>
                        </li>
                    ))
                )}
            </ul>

            {cast.length > 15 && (
                <button onClick={handlerShowAll}>
                    {showAll ? "Hide" : "Show more"}
                </button>
            )}
        </div>
    );
};