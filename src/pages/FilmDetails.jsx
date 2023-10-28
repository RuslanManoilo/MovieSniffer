import { FilmInfo } from "components/FilmInfo";
import { fetchFilmByID } from "moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FilmDetails() {
    const params = useParams();
    const [film, setFilm] = useState();

    useEffect(() => {
        async function getFilm() {
            try {
                const infoFilm = await fetchFilmByID(params.moviesID);
                setFilm(infoFilm);
            } catch (error) {
                
            } finally {

            }
        };

        getFilm();
    }, [params.moviesID]);

    return (
        <div>
            {film && <FilmInfo info={film} />}
        </div>
    )
}