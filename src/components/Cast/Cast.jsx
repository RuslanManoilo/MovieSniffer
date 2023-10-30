import { Loader } from "components/Loader/Loader";
import { GalleryItem } from "components/MovieShortDetails/MovieShortDetails.styled";
import { NotFound } from "components/NotFound/NotFound";
import { fetchMovieCredits } from "moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ActorInfo, ImagesGallery, ItemImage } from "./Cast.styled";
import { MainButton } from "components/BackLink/MainButton";

export default function Cast() {
    const { movieID } = useParams();
    const [cast, setCast] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const defaultImg = 'https://image.tmdb.org/t/p/w500/esN9CxXr5C4h7YHY3Om1qOexbxq.jpg';
    const visibleCast = showAll ? cast : cast.slice(0, 16);

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

            <ImagesGallery>
                {visibleCast.length > 0 && (
                    visibleCast.map(item => (
                        <GalleryItem key={item.id}>
                            <ItemImage src={item.profile_path ? (IMG_URL + item.profile_path) : defaultImg} alt={item.name} />
                            <ActorInfo>
                                <h3>{item.name}</h3>
                                <p>Character: {(item.character === "" ? "Other" : item.character)}</p>
                            </ActorInfo>
                        </GalleryItem>
                    ))
                )}
            </ImagesGallery>

            {cast.length > 16 && (
                <MainButton onClick={handlerShowAll}>
                    {showAll ? "Hide" : "Show more"}
                </MainButton>
            )}
        </>
    );
};