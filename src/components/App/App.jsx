import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";
import NotFound from "../../pages/NotFound/NotFound";
import css from "./App.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="../../pages/Home/Home.jsx">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="../../pages/About/About.jsx">
          About
        </NavLink>
        <NavLink
          className={buildLinkClass}
          to="../../pages/Products/Products.jsx"
        >
          Products
        </NavLink>
      </nav>
      <Routes>
        <Route path="../../pages/Home/Home.jsx" element={<Home />} />
        <Route path="../../pages/About/About.jsx" element={<About />} />
        <Route
          path="../../pages/Products/Products.jsx"
          element={<Products />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
