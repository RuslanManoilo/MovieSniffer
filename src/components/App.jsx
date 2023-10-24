import { fetchFilms } from "moviesAPI";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";
import { Routes, Route, NavLink } from "react-router-dom";

export const App = () => {
  const test = fetchFilms()
  console.log(test);
  return (
    <div>
      <nav>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/movies" >Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
};
