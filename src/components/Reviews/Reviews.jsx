import { Loader } from "components/Loader/Loader";
import { fetchMovieReviews } from "moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ListReviews, NoReviews } from "./Reviews.styled";

export default function Reviews() {
    const { movieID } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getReviews() {
            try {
                setLoading(true);

                const allReviews = await fetchMovieReviews(movieID);
                setReviews(allReviews);

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            };
        };

        getReviews();

    }, [movieID]);

    return (
        <>
            {loading && <Loader />}
            
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