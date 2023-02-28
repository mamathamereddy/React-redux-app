import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Card = ({ products }) => {
  //console.log(products);
  return (
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
  );
};

export default Card;
