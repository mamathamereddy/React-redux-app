import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Men from "./components/Men";
import ProductsWithId from "./components/ProductsWithId";
import Categeories from "./components/Categeories"
import CatageoryList from './components/CatageoryList'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Categeories/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:slug" component={Men} />
            <Route path="/search/:CategorySlug" component={CatageoryList}></Route>
            <Route path="/products/:idSlug" component={ProductsWithId} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
