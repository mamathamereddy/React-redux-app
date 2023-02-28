import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToBasket } from "../redux/actions/addAction";
import { getProductId } from "../redux/actions/getProductId";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import "../App.css";

const ProductsWithId = (props) => {
  //console.log(props);

  const { getProductId, addToBasket } = props;
  const { productID } = props.productsProps;
  const { idSlug } = useParams();
  console.log(idSlug);
  console.log(productID);

  useEffect(() => {
    getProductId(idSlug);
  }, [idSlug]);

  return (
    <div>
      {productID
        ? productID.map((product) => {
            return (
              <div className="product-page" key={product.id}>
                <img
                  className="productwithidimage"
                  src={product.image}
                  alt={product.name}
                />
                <ul className="productdetails">
                  <li>
                    <h2>{product.name}</h2>
                  </li>
                  <li>{product.brand}</li>
                  <li>{product.description}</li>
                  <li>
                    <Button
                      type="button"
                      onClick={addToBasket}
                      text="Add to cart"
                      className="cart"
                    />
                  </li>
                </ul>
              </div>
            );
          })
        : `Sorry cannot find any products
        `}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsProps: state.productsState,
});

export default connect(mapStateToProps, { addToBasket, getProductId })(
  ProductsWithId
);
