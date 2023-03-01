import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToBasket } from "../redux/actions/addAction";
import { getProducts } from "../redux/actions/getProducts";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Fade from "react-reveal";
import Button from "./Button";

const Men = (props) => {
  const { getProducts, addToBasket } = props;
  const { productsList } = props.productsProps;
  const { slug } = useParams();
  const { cartProducts } = props.basketProps;
  //console.log(slug);
  //console.log(productsList)
  useEffect(() => {
    getProducts();
  }, [slug]);

  const mensProducts = productsList
    ? productsList.filter((item) => item.gender === slug)
    : null;
  //console.log(mensProducts);
  return (
    <Fade bottom cascade>
      <div className="container">
        {productsList
          ? mensProducts.map((product) => {
              return (
                <div className="products_container">
                  <Card
                    products={product}
                    addToBasket={addToBasket}
                    cartProducts={cartProducts}
                  />
                </div>
              );
            })
          : `Sorry cannot find any products for men`}
      </div>
    </Fade>
  );
};

const mapStateToProps = (state) => ({
  productsProps: state.productsState,
  basketProps: state.basketState,
});
export default connect(mapStateToProps, { getProducts, addToBasket })(Men);
