import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Home from "./Home/Home";
import PageItemContainer from "./PageItem/pageItemContainer";
import ShoppingCartContainer from "./ShoppingCart/ShoppingCartContainer";
//import "./css/css-reset.css";
import "./css/header.css";
import "./css/main.css";
import "./css/main-content.css";
import "./css/Paige-item.css";
import "./css/media.css";
function Root() {
  return (
    <div id="root">
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route
            path="/ShoppingСart/ShoppingСartContainer"
            component={ShoppingCartContainer}
          />
          <Route
            path="/PageItem/pageItemContainer/:productid"
            component={PageItemContainer}
          />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
