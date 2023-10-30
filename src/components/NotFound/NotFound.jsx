import { ErrorMessage, ErrorPage, ErrorTitle, HomeLink } from "./NotFound.styled";

export const NotFound = () => {
    return (
        <ErrorPage>
            <h3>Unknown Error occurred.</h3>
            <ErrorTitle>Page not found!</ErrorTitle>
            <ErrorMessage>
                We're sorry you ended up here. Try refreshing the page or return to <HomeLink to={'/'}>Home</HomeLink>.
            </ErrorMessage>
        </ErrorPage>
    );
};