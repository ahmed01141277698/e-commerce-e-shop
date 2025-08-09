import { FaStar } from "react-icons/fa";
import "./ProductCart.css";
import { addToCart } from "../redux/CartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const handelAddToCarte = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Successfully !");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="product-card">
      <img
        data-aos="fade-left"
        data-aos-delay="200"
        src={product.image}
        alt={product.name}
        className="imgProduct"
      />
      <div className="text-product">
        <h2 className="text-h2-name">{product.name}</h2>
        <p className="prgraphetextimogy">${product.price}</p>
        <h6 className="details">{product.details}</h6>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div
          onClick={(e) => handelAddToCarte(e, product)}
          className="add-to-cart"
        >
          <div className="add-total">
            <span className="span-pls"> + </span>
            <span className="add-to-car-pragraph">Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
