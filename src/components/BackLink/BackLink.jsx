import { Link } from "react-router-dom";

export const BackLink = ({ to = '/' }) => {
    return (
        <Link to={to}>
            <button>Go back</button>
        </Link>
    );
};