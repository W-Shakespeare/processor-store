import React from "react";
import { connect } from "react-redux";
import {
  addstart,
  addresult,
  shoppingСart,
  shoppingСartLength,
  removeFromCart
} from "../Home/duck/actions/actions";
import ShoppingСartComponent from "./ShoppingСartComponent";
//import { throws } from "assert";

class ShoppingСartContainer extends React.Component {
  render() {
    console.log(this.props);

    // console.log(this.props.k.shoppingСart);
    return (
      <ShoppingСartComponent
        shoppingСart={this.props.shoppingСart}
        //shoppingСartDelete={this.shoppingСartDelete}
      />
    );
  }

  /*
  shoppingСartGet = props => {
    fetch("http://localhost:5000/Shop", {
      method: "GET"
    })
      .then(r => r.json())
      .then(res => {
        this.props.shoppingСart(res);
        //this.setState(state => ({ shoppingСartGet: res }));
      });
    console.log(222222222);
    console.log(this.props);
  };
*/
  shoppingСartDelete = (event, props) => {
    this.props.removeFromCart(this.props);
  };
}

function mapStateToProps(state) {
  return {
    shoppingСart: state.shoppingСart
  };
}
/*
function mapDispatchToProps(dispatch) {
  return {
    result: i => dispatch(addresult(i)),
    //start: i => dispatch(addstart(i)),
    shoppingСart: i => dispatch(shoppingСart(i)),
    shoppingСartLength: i => dispatch(shoppingСartLength(i))
  };
}
*/
export default connect(
  mapStateToProps,
  null
)(ShoppingСartContainer);

//export default ShoppingСartContainer;
