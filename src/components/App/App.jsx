import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Products from "../../pages/Products/Products";
import NotFound from "../../pages/NotFound/NotFound";
import ProductsDetails from "../../pages/ProductsDetails/ProductsDetails";
import Mission from "../../pages/Mission/Mission";
import Team from "../../pages/Team/Team";
import Reviews from "../../pages/Reviews/Reviews";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {
  return (
    <div>
      <h1>Our App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />}>
          <Route path="productsdetails" element={<ProductsDetails />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
