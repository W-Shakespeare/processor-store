import React from "react";
import ComponentOneProcessorAll from "./ComponentOneProcessorAll";
import { connect } from "react-redux";
import { shoppingСart, shoppingСartLength } from "./duck/actions/actions";

class ContainerOneProcessorAll extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("what is State", this.props.reduxState);
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
    reduxState: algorithm(state)
  };
}

export default connect(
  mapStateToProps,
  null
)(ContainerOneProcessorAll);
