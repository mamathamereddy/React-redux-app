import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToBasket } from "../actions/addAction";
import { getProducts } from "../actions/getProducts";
import {useParams} from 'react-router-dom'

const Men = (props) => {
  const { getProducts, addToBasket } = props;
  const { productsList } = props.productsProps;
  const{slug}=useParams()
  console.log(slug)
  //console.log(productsList)
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const mensProducts = productsList.filter((item) => item.gender === slug);
  console.log(mensProducts);
  return (
    <div className="container">
      {productsList
        ? mensProducts.map((product) => {
            return (
              <div className="image">
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
                    <Card.Title>
                      <h4>{product.brand}</h4>
                    </Card.Title>
                    <Card.Title>
                      <h3>{product.name}</h3>
                    </Card.Title>
                    <Card.Text>
                      <h3>{product.price} DKK</h3>
                    </Card.Text>
                    <a
                      onClick={addToBasket}
                      className="addtocart cart1"
                      href="#"
                    >
                      Add to cart
                    </a>
                  </Card.Body>
                </Card>
              </div>
            );
          })
        : `Sorry cannot find any products for men`}
    </div>
  );
};

const mapStateToProps = (state) => ({
  productsProps: state.productsState,
});
export default connect(mapStateToProps, { getProducts, addToBasket })(Men);
