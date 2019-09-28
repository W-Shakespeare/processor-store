import React from "react";
import { Link } from "react-router-dom";
import ContainerShoppingСartStatus from "./ContainerShoppingСartStatus";

function Nav() {
  return (
    <nav>
      <ul className="menu-string">
        <li className="menu-item">
          <Link className="link-menu" to="/ShoppingСart/ShoppingСartContainer">
            Корзина
          </Link>
          <ContainerShoppingСartStatus />
        </li>
        <li className="menu-item">
          <Link className="link-menu" to="/">
            Товары
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
