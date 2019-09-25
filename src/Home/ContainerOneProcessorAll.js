import React from "react";
import ComponentOneProcessorAll from "./ComponentOneProcessorAll";
import { connect } from "react-redux";

class ContainerOneProcessorAll extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("This is State ", this.props.reduxState);
    return <ComponentOneProcessorAll result={this.props.reduxState} />;
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
}

function selectCheck(arr, state) {
  let arrSelectItems = state.selectItems;
  return arrSelectItems
    .filter(obj => obj["boolean"] == true)[0]
    ["sort"](([] = [...arr]));
}

function algorithm(state) {
  let obj = state.filterItems;
  let processors = state.allProcessorItem;

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
  console.log("Function algorithm return = ", result);
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
