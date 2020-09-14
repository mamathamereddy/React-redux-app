import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToBasket } from "../actions/addAction";
import { getProducts } from "../actions/getProducts";

const Home = ({ productsProps, getProducts, addToBasket }) => {
  // {productsProps,getProducts}
  console.log(productsProps);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      {productsProps.productsList
        ? productsProps.productsList.map((product) => {
            return (
              <div className="image" key={product.id}>
              <Card
                style={{
                  width: "15rem",
                  marginLeft: " 1rem",
                  marginTop: "0.7rem",
                }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  width="60%"
                  height="150px"
                />
                <Card.Body>
                <Card.Title><h4>{product.brand}</h4></Card.Title>
                  <Card.Title><h3>{product.name}</h3></Card.Title> 
                  <Card.Text><h4>{product.price} DKK</h4></Card.Text>
                  <a onClick={addToBasket} className="addtocart cart1" href="#">
                    Add to cart
                  </a>
                </Card.Body>
              </Card>
              </div>
            );
          })
        : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsProps: state.productsState,
});
export default connect(mapStateToProps, { addToBasket, getProducts })(Home);
