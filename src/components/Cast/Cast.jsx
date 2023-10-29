import { Loader } from "components/Loader/Loader";
import { NotFound } from "components/NotFound/NotFound";
import { fetchMovieCredits } from "moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Cast() {
    const { movieID } = useParams();
    const [cast, setCast] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const defaultImg = 'https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-960x1024-49eypb0d.png';
    const visibleCast = showAll ? cast : cast.slice(0, 15);

    useEffect(() => {
        async function getMovieCredits() {
            try {

                setLoading(true);
                setError(false);

                const castMovie = await fetchMovieCredits(movieID);
                setCast(castMovie);

            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            };
        };

        getMovieCredits();
        
    }, [movieID]);

    const handlerShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            {loading && <Loader />}
            {error && <NotFound />}

            <ul>
                {visibleCast.length > 0 && (
                    visibleCast.map(item => (
                        <li key={item.id}>
                            <img src={item.profile_path ? (IMG_URL + item.profile_path) : defaultImg} alt={item.name} width={90} />
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
        </>
    );
};