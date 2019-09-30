import { ADD_ID_ARR } from "./../types/types";

function addIdArr(i) {
  return {
    type: ADD_ID_ARR,
    payload: i
  };
}
export { addIdArr };
