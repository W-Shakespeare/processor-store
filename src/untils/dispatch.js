/*
import store from "../store/index";
import { filterItems } from "../Home/duck/actions/actions";
///*
/
function dispatch(event) {
  event.preventDefault();
  console.dir(event.target.parentNode.attributes.value.value);
  console.dir(event.target.parentNode);
  let eventItem = event.target.parentNode.attributes.value.value;
  let Swit = document.getElementById("swi");
  console.dir(Swit);

  let processorArr = ["AMD", "Intel"];
  let processorFamilyArr = ["Intel Core i3", "Intel Core i5", "Intel Core i7"];
  let yadroArr = ["2", "4", "6", "8"];

  function getBoolean(eventItem, arr) {
    let arrBoolean = arr.map(i => i == eventItem);
    let boolean = arrBoolean.some(i => i == true);
    return boolean;
  }
  const obj = {
    yadro: {},
    classs: {},
    processorFamily: {}
  };

  if (getBoolean(eventItem, processorArr)) {
    obj["classs"] = { [eventItem]: true };
  }
  if (getBoolean(eventItem, processorFamilyArr)) {
    obj["processorFamily"] = { [eventItem]: true };
  }

  if (getBoolean(eventItem, yadroArr)) {
    obj["yadro"] = { [eventItem]: true };
  }

  console.log(obj);
  console.log(11111111111111111111111111111);
  store.dispatch(filterItems(obj));
}

export default dispatch;
//*/
