import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../redux/actions/getAction";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  //console.log(props);

  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <header>
      <div className="overlay"></div>
      <nav>
        <h2>Shopping cart</h2>
        <ul>
          <li>
            <Link to="/" className="NavLinks">
              Home
            </Link>
          </li>
          <li>
            <Link to="/men" className="NavLinks">
              Men
            </Link>
          </li>
          <li>
            <Link to="/women" className="NavLinks">
              Women
            </Link>
          </li>
          <li className="cart">
            <Link to="/cart">
              <ion-icon name="basket-outline"></ion-icon>Cart{" "}
              <span>{props.basketProps.basketNumbers}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps, { getNumbers })(Navbar);
