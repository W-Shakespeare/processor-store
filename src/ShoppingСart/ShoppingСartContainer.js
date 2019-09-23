import React from "react";
import { connect } from "react-redux";
import {
  addstart,
  addresult,
  shoppingСart,
  shoppingСartLength
} from "../Home/duck/actions/actions";
import ShoppingСartComponent from "./ShoppingСartComponent";
//import { throws } from "assert";

class ShoppingСartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.shoppingСartGet();

    //this.algorithm=this.algorithm.bind(this);
  }
  render() {
    console.log(this.props);

    console.log(this.props.k.shoppingСart);
    return (
      <ShoppingСartComponent
        shoppingСart={this.props.k.shoppingСart}
        shoppingСartDelete={this.shoppingСartDelete}
      />
    );
  }

  shoppingСartGet = props => {
    fetch("/Shop", {
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
    var idItem = event.currentTarget;
    var idItem = idItem.name;
    console.log(event);
    console.log(this.props);
    var cart = this.props.k.shoppingСart;
    console.log(cart);
    var res = cart.filter(item => {
      return item.id != idItem;
    });
    console.log(res);

    this.props.shoppingСart(res);
    this.props.shoppingСartLength(res);

    var idItem = event.currentTarget;
    var idItem = idItem.name;
    console.log(idItem);

    fetch("http://localhost:5000/Shop", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        id: idItem
      })
    });

    fetch("http://localhost:5000/Shop1", {
      method: "GET"
    })
      .then(r => r.json())
      .then(res => console.log(res));

    console.log(1111111111);

    //window.location.reload();
  };
}

function mapStateToProps(state) {
  return {
    k: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    result: i => dispatch(addresult(i)),
    //start: i => dispatch(addstart(i)),
    shoppingСart: i => dispatch(shoppingСart(i)),
    shoppingСartLength: i => dispatch(shoppingСartLength(i))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingСartContainer);

//export default ShoppingСartContainer;
