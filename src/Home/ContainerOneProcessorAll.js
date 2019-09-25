import React from "react";
import ComponentOneProcessorAll from "./ComponentOneProcessorAll";
import { connect } from "react-redux";
import { shoppingСart, shoppingСartLength } from "./duck/actions/actions";

class ContainerOneProcessorAll extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("This is State", this.props.reduxState);
    return (
      <ComponentOneProcessorAll
        res={this.props.reduxState.filterItems}
        result={this.props.reduxState}
        ShoppingСart={this.ShoppingСart}
      />
    );
  }
  componentDidMount() {
    this.scrollTo();
  }

  scrollTo() {
    window.scrollTo(0, 0);
  }
}

function inputSearchText(arr, state) {
  let inputSearchText = state.inputSearchText[0]["value"];
  let reg = new RegExp(inputSearchText, "i");
  //  debugger;
  let result = arr.reduce((acc, next) => {
    for (let key in next) {
      if (reg.test(next[key]) && key != "src") {
        acc.push(next);
        return acc;
      }
    }
    return acc;
  }, []);
  return result;
  return inputSearchText === ""
    ? arr
    : arr.filter(obj => {
        for (let key in obj) {
          return reg.test(obj[key]) ? true : false;
        }
      });
}

function selectCheck(arr, state) {
  let arrAllProcessorItem = [...arr];
  let arrSelectItems = state.selectItems;
  console.log("this obj......", arrSelectItems);
  return arrSelectItems
    .filter(obj => obj["boolean"] == true)[0]
    ["sort"](arrAllProcessorItem);
}

function algorithm(state) {
  let obj = state.filterItems;
  let processors = state.allProcessorItem;
  console.log(processors);
  console.log(obj);

  function shouldItFilter(filterName) {
    return Object.values(obj[filterName]).some(e => e);
  }
  function filterProcessorsByField(fieldName, processors) {
    const filterValue = obj[fieldName];
    return processors.filter(p => filterValue[p[fieldName]]);
  }
  const result = Object.keys(obj).reduce((acc, filterName) => {
    if (shouldItFilter(filterName)) {
      return filterProcessorsByField(filterName, acc);
    }
    return acc;
  }, processors);
  console.log(result);
  return result;
}

function mapStateToProps(state) {
  return {
    reduxState: inputSearchText(selectCheck(algorithm(state), state), state)
  };
}

export default connect(
  mapStateToProps,
  null
)(ContainerOneProcessorAll);

function k(i) {
  let inputSearchText = i;
  let reg = new RegExp(inputSearchText, "i");

  console.log(reg.test("liki"));
}
k("ki");
