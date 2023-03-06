import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addToBasket } from "../redux/actions/addAction";
import { getProducts } from "../redux/actions/getProducts";
import Fade from "react-reveal";

import Card from "../components/Card";
import "../App.css";

const Home = ({ productsProps, getProducts, addToBasket, basketProps }) => {
  console.log(productsProps);
  const { cartProducts } = basketProps;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Fade left cascade>
      <div className="container">
        {productsProps.productsList
          ? productsProps.productsList.map((product, id) => {
              return (
                <div className="products_container" key={id}>
                  <Card
                    products={product}
                    addToBasket={addToBasket}
                    cartProducts={cartProducts}
                  />
                </div>
              );
            })
          : null}
      </div>
    </Fade>
  );
};

const mapStateToProps = (state) => ({
  productsProps: state.productsState,
  basketProps: state.basketState,
});
export default connect(mapStateToProps, { addToBasket, getProducts })(Home);
