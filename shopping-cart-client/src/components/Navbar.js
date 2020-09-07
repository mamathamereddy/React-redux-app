import React from 'react';

function Navbar() {
    return (
        <header>
        <div className="overlay"></div>
        <nav>
          <h2>Shopping cart</h2>
          <ul>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li className="cart"><a href="#">
          <ion-icon name="basket-outline"></ion-icon>Cart <span>(0)</span></a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Navbar
