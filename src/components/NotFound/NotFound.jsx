import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div>
            <h3>Unknown Error occurred.</h3>
            <h2>Page not found!</h2>
            <p>We're sorry you ended up here. Try refreshing the page or return to <Link to={'/'}>Home</Link>.</p>
        </div>
    );
}