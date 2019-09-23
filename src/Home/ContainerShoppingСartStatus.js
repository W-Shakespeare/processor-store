import React from "react";
//import ComponentShoppingСartStatus from './ComponentShoppingСartStatus'
import { shoppingСartLength } from "./duck/actions/actions";
import { connect } from "react-redux";
var lengt = 0;

class ContainerShoppingСartStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShoppingСartArr: []
    };
    //this.ShoppingСartLenght();
  }
  render() {
    console.log(this.state.ShoppingСartArr);
    return (
      <p className="ShoppingСartStatus">
        {this.status()}
        {lengt}
      </p>
    );
  }
  ShoppingСartLenght() {
    /*fetch("http://localhost:5000/Shop", {
      method: "GET"
    })
  */ fetch(
      "/Shop",
      {
        method: "GET"
      }
    )
      .then(r => r.json())
      .then(res => {
        this.props.shoppingСartLength(res);
        //this.setState(state => ({ shoppingСartGet: res }));
      });
    //console.log(this.props.result.shoppingСart);

    console.log("корзина");
  }
  status = () => {
    console.log(this.props.result.shoppingСartLength);
    return this.props.result.shoppingСartLength.map(it => {
      //lengt = this.props.result.shoppingСartLength;
      //alengt.length;
      // console.log(alengt.length);

      if (this.props.result.shoppingСartLength.length == 0) {
        lengt = 0;
      } else {
        console.log(1000);

        lengt = this.props.result.shoppingСartLength.length;
      }
      console.log(lengt);
    });
  };
}
const mapStateToProps = state => {
  return {
    result: state
  };
};
function mapDispatchToProps(dispatch) {
  return {
    shoppingСartLength: i => dispatch(shoppingСartLength(i))
  };
  //нужно отправить id сюда с index.js
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerShoppingСartStatus);

//export default ContainerShoppingСartStatus;
