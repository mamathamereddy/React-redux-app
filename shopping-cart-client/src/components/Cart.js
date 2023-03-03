import React from "react";
import { connect } from "react-redux";
import Fade from "react-reveal";

const Cart = ({ basketProps }) => {
  const { cartProducts } = basketProps;
  console.log(cartProducts);

  const formatCurrency = (num) => {
    return Number(num && num.toFixed(1)).toLocaleString() + "Dkk ";
  };

  return (
    <>
      <div>
        {cartProducts.length === 0 ? (
          <div className="carts-header">Cart is empty</div>
        ) : (
          <div className="carts-header">
            You have{" "}
            <span>
              {cartProducts.length}
              {""}
            </span>{" "}
            items in the cart{" "}
          </div>
        )}
        <h3>this is cart page</h3>
      </div>
      <div className="cart">
        <Fade left cascade>
          <ul className="cart-items">
            {cartProducts.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.name}></img>
                </div>
                <div>
                  <div>{item.name}</div>
                  <div className="right">
                    {formatCurrency(item.price)} x {item.count}
                    {" ="}
                    {formatCurrency(item.price * item.count)}
                    <button
                      className="button"
                      onClick={() => this.props.removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps)(Cart);
