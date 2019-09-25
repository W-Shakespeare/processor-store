import {
  ALL_PROCESSOR_ITEM,
  ADD_RESULT,
  SHOPPING_CART,
  SHOPPING_CART_LENGTH,
  ADD_ID_ARR,
  FILTER_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGED_SELECT_BOOLEAN,
  CHANGED_INPUT_SEARCH
} from "./../types/types";
import procesor from "../../processor";

const result = {
  allProcessorItem: procesor,
  arrProcessorItem: [],
  filterItems: {
    yadro: { 2: false, 4: false, 6: false, 8: false },
    classs: { Intel: false, AMD: false },
    processorFamily: {
      "Intel Core i3": false,
      "Intel Core i5": false,
      "Intel Core i7": false,
      "Intel Core i9": false
    }
  },
  selectItems: [
    {
      boolean: true,
      value: "--",
      sort(arr) {
        return arr;
      }
    },
    {
      boolean: false,
      value: "От дорогого к дешевому",
      sort(arr) {
        return arr.sort((a, b) => b.price2 - a.price2);
      }
    },
    {
      boolean: false,
      value: "От дешевого к дорогому",
      sort(arr) {
        return arr.sort((a, b) => a.price2 - b.price2);
      }
    }
  ],
  inputSearchText: [{ value: "" }],
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
      return {
        ...state,
        filterItems: filterItems(state.filterItems, action.payload)
      };
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
    case CHANGED_SELECT_BOOLEAN:
      return {
        ...state,
        selectItems: changedSelectBoolean(state.selectItems, action.payload)
      };
    case CHANGED_INPUT_SEARCH:
      return {
        ...state,
        inputSearchText: [{ value: action.payload }]
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

function filterItems(obj, payload) {
  for (let key in obj) {
    if (payload in obj[key]) {
      console.log("Here obj", obj[key]);
      if (obj[key][payload] == false) {
        return (obj = { ...obj, [key]: { ...obj[key], [payload]: true } });
      } else {
        return (obj = { ...obj, [key]: { ...obj[key], [payload]: false } });
      }
    }
  }
}

function changedSelectBoolean(arr, string) {
  return arr.map(obj => {
    if (obj["value"] == string) {
      return {
        ["boolean"]: true,
        ["value"]: obj["value"],
        ["sort"]: obj["sort"]
      };
    } else {
      return {
        ["boolean"]: false,
        ["value"]: obj["value"],
        ["sort"]: obj["sort"]
      };
    }
  });
}
