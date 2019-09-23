import React from "react";
import { shoppingСartLength } from "./duck/actions/actions";
import { connect } from "react-redux";

class ContainerShoppingСartStatus extends React.Component {
  render() {
    return <p className="ShoppingСartStatus">{this.props.basketSize}</p>;
  }
}
const mapStateToProps = state => {
  return {
    basketSize: state.shoppingСart.length
  };
};

export default connect(
  mapStateToProps,
  null
)(ContainerShoppingСartStatus);

//export default ContainerShoppingСartStatus;
