import {
  ALL_PROCESSOR_ITEM,
  ADD_RESULT,
  SHOPPING_CART,
  SHOPPING_CART_LENGTH,
  ADD_ID_ARR,
  FILTER_ITEMS
} from "../types/types";

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
  filterItems
};
