import { Loader } from "components/Loader/Loader";
import { NotFound } from "components/NotFound/NotFound";
import { fetchMovieReviews } from "moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListReviews, NoReviews } from "./Reviews.styled";

export default function Reviews() {
    const { movieID } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getReviews() {
            try {

                setLoading(true);
                setError(false);

                const allReviews = await fetchMovieReviews(movieID);
                setReviews(allReviews);

            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            };
        };

        getReviews();

    }, [movieID]);

    return (
        <>
            {loading && <Loader />}
            {error && <NotFound />}
            
            {reviews.length === 0 ?
                <NoReviews>No info!</NoReviews>
                :
                (<ListReviews>
                    {reviews.map(item => (
                        <li key={item.id}>
                            <h3>Autor: {item.author}</h3>
                            <p>{item.content}</p>
                        </li>
                    ))}
                </ListReviews>)
            }
        </>
    );
};