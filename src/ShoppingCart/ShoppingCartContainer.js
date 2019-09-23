import React from "react";
import { connect } from "react-redux";
import ShoppingCartComponent from "./ShoppingCartComponent";
class ShoppingCartContainer extends React.Component {
  render() {
    console.log(this.props);

    return (
      <ShoppingCartComponent
        shoppingСart={this.props.shoppingСart}
        //shoppingСartDelete={this.shoppingСartDelete}
      />
    );
  }

  shoppingСartDelete = (event, props) => {
    this.props.removeFromCart(this.props);
  };
}

function mapStateToProps(state) {
  return {
    shoppingСart: state.shoppingСart
  };
}

export default connect(
  mapStateToProps,
  null
)(ShoppingCartContainer);
