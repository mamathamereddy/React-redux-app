import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { increaseProductCount } from "../redux/actions/addAction";

import {
  decreaseProductCount,
  removeFromCart,
} from "../redux/actions/deleteAction";

const Cart = ({
  basketProps,
  removeFromCart,
  decreaseProductCount,
  increaseProductCount,
}) => {
  const { cartProducts } = basketProps;

  const totalAmount = cartProducts.reduce((acc, curr) => {
    return curr.count * curr.price + acc;
  }, 0);

  return (
    <div className="cart-container">
      {cartProducts && cartProducts.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cartProducts &&
              cartProducts.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>

                      <button
                        onClick={() => removeFromCart(cartItem, cartProducts)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${cartItem.price}</div>
                  <div className="cart-product-quantity">
                    <button
                      onClick={() =>
                        decreaseProductCount(cartItem, cartProducts)
                      }
                    >
                      -
                    </button>
                    <div className="count">{cartItem.count}</div>
                    <button
                      onClick={() =>
                        increaseProductCount(cartItem, cartProducts)
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-product-total-price">
                    ${(cartItem.price * cartItem.count).toFixed(2)}
                  </div>
                </div>
              ))}
          </div>
          <div className="cart-summary">
            <button
              className="clear-btn"
              onClick={() => console.log("clear cart")}
            >
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">{totalAmount.toFixed(2)}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps, {
  increaseProductCount,
  removeFromCart,
  decreaseProductCount,
})(Cart);
