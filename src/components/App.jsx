import { Routes, Route, NavLink } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import FilmDetails from "pages/FilmDetails";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/movies" >Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesID" element={<FilmDetails />} />
      </Routes>
    </div>
  );
};
