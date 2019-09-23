import {
  ALL_PROCESSOR_ITEM,
  ADD_RESULT,
  SHOPPING_CART,
  SHOPPING_CART_LENGTH,
  ADD_ID_ARR,
  FILTER_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "../types/types";

function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  };
}

function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id
  };
}

function allProcessorItem(i) {
  return {
    type: ALL_PROCESSOR_ITEM,
    payload: i
  };
}
function addresult(i) {
  return {
    type: ADD_RESULT,
    payload: i
  };
}
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
function filterItems(i) {
  return {
    type: FILTER_ITEMS,
    payload: i
  };
}

export {
  addresult,
  shoppingСart,
  shoppingСartLength,
  allProcessorItem,
  filterItems,
  addToCart,
  removeFromCart
};
