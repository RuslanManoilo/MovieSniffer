import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Header, Main, Navigation, NavigationLink } from "./Layout.styled";

export const Layout = () => {
    return (
        <>
            <Header>
                <Navigation>
                    <NavigationLink to="/" >Home</NavigationLink>
                    <NavigationLink to="/movies" >Movies</NavigationLink>
                </Navigation>
            </Header>
            <Main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </Main>
        </>
    );
};