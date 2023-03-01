import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import "../App.css";

const Card = ({ products, addToBasket, cartProducts }) => {
  //console.log(products);
  const handleClick = () => {
    addToBasket(products, cartProducts);
  };
  return (
    <>
      <Link
        to={`/products/${products.id}`}
        className="products_container"
        key={products.id}
      >
        <ul>
          <li className="product-image">
            <img src={products.image} alt={products.name} />
          </li>

          <li>{products.brand}</li>
          <li>{products.name}</li>
          <li>{products.price} DKK</li>
        </ul>
      </Link>
      <Button
        type="button"
        onClick={handleClick}
        text="Add to cart"
        className="cart"
      />
    </>
  );
};

export default Card;
