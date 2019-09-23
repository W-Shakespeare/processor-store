import {
  SHOPPING_CART,
  SHOPPING_CART_LENGTH,
  ADD_ID_ARR
} from "./../types/types";

function shoppingСart(i) {
  return {
    type: SHOPPING_CART,
    payload: i
  };
}
function shoppingСartLength(i) {
  return {
    type: SHOPPING_CART_LENGTH,
    payload: i
  };
}

function addIdArr(i) {
  return {
    type: ADD_ID_ARR,
    payload: i
  };
}
export { shoppingСart, shoppingСartLength, addIdArr };
