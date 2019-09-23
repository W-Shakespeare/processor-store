import {
  ALL_PROCESSOR_ITEM,
  ADD_RESULT,
  SHOPPING_CART,
  SHOPPING_CART_LENGTH,
  ADD_ID_ARR,
  FILTER_ITEMS
} from "./../types/types";
import procesor from "../../processor";
const result = {
  allProcessorItem: procesor,
  arrProcessorItem: [],
  filterItems: {},
  shoppingСart: [],
  shoppingСartLength: [],
  addIdArr: []
};

function addresult(state = result, action) {
  if (action.type == FILTER_ITEMS) {
    return Object.assign({}, state, { filterItems: action.payload });
  }
  if (action.type == ALL_PROCESSOR_ITEM) {
    return Object.assign({}, state, { allProcessorItem: action.payload });
  }
  if (action.type == ADD_RESULT) {
    return Object.assign({}, state, { arrProcessorItem: action.payload });
  }
  if (action.type == SHOPPING_CART) {
    return Object.assign({}, state, { shoppingСart: action.payload });
  }
  if (action.type == SHOPPING_CART_LENGTH) {
    return Object.assign({}, state, { shoppingСartLength: action.payload });
  }
  if (action.type == ADD_ID_ARR) {
    return Object.assign({}, state, { addIdArr: action.payload });
  }
  return state;
}
export default addresult;

/*
arrProcessorItem: {
    yadro: { 2: true, 4: true, 6: true, 8: true },
    classs: { AMD: true, Intel: true },
    processorFamily: {
      "Intel Core i9": true,
      "Intel Core i5": true,
      "Intel Core i3": true
    }
*/
