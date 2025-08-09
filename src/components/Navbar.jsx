import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import "./Navbar.css"; //CSS
import "../index.css";
import { useSelector } from "react-redux";
import { useState } from "react";

import { ProductData } from "../assets/MockData";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState("");
  const data = ProductData;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" className="no-underline">
            e-SHOP
          </Link>
        </div>
        <div className="navbar-search">
          <form autoComplete="off">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search.length > 0 && (
              <ul className="dropdown-list">
                {filteredData.length > 0 ? (
                  filteredData.map((product) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="dropdown-item"
                      onClick={() => setSearch("")}
                    >
                      <img src={product.image} alt={product.name} />
                      <div>
                        <span className="item-title">{product.name}</span>
                        <span className="item-price">${product.price}</span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <li className="dropdown-item">NO Results </li>
                )}
              </ul>
            )}

            <FaSearch className="search-icon" />
          </form>
        </div>

        {/* Icons */}
        <div className="navbar-icons">
          <Link to="/cart" title="Cart" className="car-nam-absliot">
            <FaShoppingCart className="icon" />
            {products.length > 0 && (
              <span className="numpre-length">{products.length}</span>
            )}
          </Link>
          <Link to="/join">
            <div className="user-profile">
              {/* <div className="user-profile-inner"> */}
              <FaUser className="user-icon" />

              <a className="fancy" href="#">
                <span className="top-key"></span>
                <span className="text">Log In</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </a>
            </div>
          </Link>
        </div>

        <div className="navbar-fr">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/shop">
            Shop
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>
          <Link className="links" to="/about">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
