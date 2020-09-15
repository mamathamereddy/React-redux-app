import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToBasket } from "../actions/addAction";
import { getProductId } from "../actions/getProductId";
import {useParams} from 'react-router-dom'

const ProductsWithId=(props)=> {
    console.log(props)
    const { getProductId,addToBasket } = props;
  const { productID } = props.productsProps;
  const{idSlug}=useParams()
  console.log(idSlug)
  console.log(productID)
  useEffect(() => {
    getProductId(idSlug);
  },[idSlug]);
    return (
        <div className="container">
      {productID
        ? productID.map((product) => {
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
    )
    
}

const mapStateToProps = (state) => ({
    productsProps: state.productsState,
  });

export default connect(mapStateToProps, {addToBasket,getProductId})(ProductsWithId);



