import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Men from "./components/Men";
import Women from "./components/Women";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/men" component={Men} />
            <Route exact path="/women" component={Women} />
            <Route path="/cart" component={Cart} />
          </Switch>
          
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
