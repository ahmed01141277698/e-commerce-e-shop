import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductData } from "../assets/MockData";
import ProductCart from "../components/ProductCart";
import "./Home.css";
import "../components/ProductCart.css";

import { setProducts } from "../redux/ProductSlice";

const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products?.products || []);
  useEffect(() => {
    dispatch(setProducts(ProductData));
  }, []);

  return (
    <div className="top-product">
      <h1 className="ALL_SHOP_h1">ALL SHOP</h1>
      <div className="slid-product">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
