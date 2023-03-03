import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Men from "./components/Men";
import ProductsWithId from "./components/ProductsWithId";
import Categeories from "./components/Categeories";
import CatageoryList from "./components/CatageoryList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Categeories />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:slug" component={Men} />
          <Route path="/search/:CategorySlug" component={CatageoryList}></Route>
          <Route path="/products/:idSlug" component={ProductsWithId} />
        </Switch>
        <Route path="/cart" component={Cart} />
      </BrowserRouter>
    </div>
  );
}

export default App;
