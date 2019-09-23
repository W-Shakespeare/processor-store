import React from "react";
import { Link } from "react-router-dom";
import ContainerShoppingСartStatus from "./ContainerShoppingСartStatus";

function Nav({ products, ShoppingСart }) {
  return (
    <nav>
      <ul className="menu-string">
        <li className="menu-item">
          <Link className="link-menu" to="/ShoppingСart/ShoppingСartContainer">
            {/* {ShoppingСart} */}
            Корзина
          </Link>
          {/* <p className="pi">11</p> */}
          <ContainerShoppingСartStatus />
        </li>
        <li className="menu-item">
          <Link className="link-menu" to="/">
            {/* {products} */}
            Товары
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
