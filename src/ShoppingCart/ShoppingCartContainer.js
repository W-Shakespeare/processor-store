import React from "react";
import { connect } from "react-redux";
import ShoppingCartComponent from "./ShoppingCartComponent";
function ShoppingCartContainer(props) {
  console.log(props);
  return <ShoppingCartComponent shoppingСart={props.shoppingСart} />;
}
function getShoppingCartArr(arr, state) {
  return arr.filter(obj => state.shoppingСart.some(obj2 => obj.id == obj2.id));
}

function mapStateToProps(state) {
  return {
    shoppingСart: getShoppingCartArr(state.allProcessorItem, state)
  };
}

export default connect(
  mapStateToProps,
  null
)(ShoppingCartContainer);
