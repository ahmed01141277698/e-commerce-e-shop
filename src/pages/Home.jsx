import React from "react";
import { MockData, ProductData } from "../assets/MockData";
import Bchiomg from "../assets/imoge7.jpg";
import "../pages/Home.css";
import "../components/ProductCart.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useState, useEffect } from "react";
import InfoSection from "../components/Infosection";
import Categorsection from "../components/Categorsection";
import { setProducts } from "../redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";
import "../index.css";
import "../components/Infosection.css";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.products || []);
  useEffect(() => {
    dispatch(setProducts(ProductData));
  }, []);

  const [isChecked, setIsChecked] = useState([]);

  const handleChange = (index) => {
    const updated = [...isChecked];
    updated[index] = !updated[index];
    setIsChecked(updated);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="home-section-one">
      <div className="home-section-one-container">
        <div className="right-text">
          <h1>SHOP BY CATERERS</h1>

          <div className="uiverse-pixel-radio-group">
            {MockData.map((moc, index) => (
              <label className="uiverse-pixel-radio" key={index}>
                <input
                  type="checkbox"
                  checked={isChecked[index]}
                  onChange={() => handleChange(index)}
                />
                <span className="label-text">{moc}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="lift-image">
          <img src={Bchiomg} alt="images" className="bachiomg" />

          <div className="image-text">
            <div className="text">
              <h2>"Your Time, Your Style"</h2>
              <p>
                "Discover timeless elegance with our handcrafted watches – where
                style meets precision."
              </p>
            </div>
            <button className="super-button">Launch Now</button>
          </div>
        </div>
      </div>

      <div className="home-section-one-container-two">
        <InfoSection />
      </div>
      <div>
        <Categorsection />
      </div>
      <div className="top-product">
        <h1>Top Product</h1>
        <div data-aos="fade-left" data-aos-delay="200" className="slid-product">
          {products.slice(0, 8).map((product) => (
            <ProductCart
              key={product.id}
              product={product}
              data-aos="fade-left"
              data-aos-delay="200"
            />
          ))}
        </div>
      </div>
      <div className="top-product">
        <h1 className="ALL_SHOP_h1">ALL SHOP</h1>
        <div className="slid-product">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
