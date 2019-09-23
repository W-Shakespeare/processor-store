import {
  ALL_PROCESSOR_ITEM,
  ADD_RESULT,
  SHOPPING_CART,
  SHOPPING_CART_LENGTH,
  ADD_ID_ARR,
  FILTER_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "./../types/types";
import procesor from "../../processor";
const result = {
  allProcessorItem: procesor,
  arrProcessorItem: [],
  filterItems: {},
  shoppingСart: [] /**
  [ {
    id: Number,
    amount: Number
  } ]
  */,
  shoppingСartLength: [],
  addIdArr: []
};

function addresult(state = result, action) {
  switch (action.type) {
    case FILTER_ITEMS:
      return { ...state, filterItems: action.payload };
    case ALL_PROCESSOR_ITEM:
      return { ...state, allProcessorItem: action.payload };
    case ADD_RESULT:
      return { ...state, arrProcessorItem: action.payload };
    case SHOPPING_CART:
      return { ...state, shoppingСart: action.payload };
    case SHOPPING_CART_LENGTH:
      return { ...state, shoppingСartLength: action.payload };
    case ADD_ID_ARR:
      return { ...state, addIdArr: action.payload };
    case REMOVE_FROM_CART:
      return {
        ...state,
        shoppingСart: removeFromCart(state.shoppingСart, action.payload)
      };
    case ADD_TO_CART:
      return {
        ...state,
        shoppingСart: addToCart(state.shoppingСart, action.payload)
      };
    default:
      return state;
  }
}

export default addresult;

function removeFromCart(arr, payload) {
  return arr.filter(i => i.id != payload);
}

function addToCart(arr, payload) {
  if (arr.some(el => el.id == payload)) return arr;

  return [...arr, { id: payload, amount: 1 }];
}
