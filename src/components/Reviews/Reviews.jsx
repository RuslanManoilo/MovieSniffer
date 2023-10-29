import { fetchMovieReviews } from "moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Reviews() {
    const { movieID } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getReviews() {
            try {
                const allReviews = await fetchMovieReviews(movieID);
                setReviews(allReviews);
            } catch (error) {
                
            } finally {

            }
            
        };

        getReviews();

    }, [movieID]);

    return (
        <ul>
            {reviews.map(item => (
                <li key={item.id}>
                    <h3>Autor: {item.author}</h3>
                    <p>{item.content}</p>
                </li>
            ))}
        </ul>
    );
};