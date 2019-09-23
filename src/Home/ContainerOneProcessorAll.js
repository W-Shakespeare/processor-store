import React from "react";
import ComponentOneProcessorAll from "./ComponentOneProcessorAll";
import { connect } from "react-redux";
import { shoppingСart, shoppingСartLength } from "./duck/actions/actions";

class ContainerOneProcessorAll extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ComponentOneProcessorAll
        res={this.props.reduxState.filterItems}
        result={this.props.reduxState.arrProcessorItem}
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
  ShoppingСart = (event, props) => {
    var idItem = event.currentTarget;
    var idItem = idItem.name;

    console.log(idItem);
    console.log(this.props);
    var cart = this.props.reduxState.arrProcessorItem;
    var res = cart.filter(item => {
      return item.id == idItem;
    });
    if (this.props.reduxState.shoppingСart.length == 0) {
      console.log(res);
      this.props.shoppingСart(res);
      this.props.shoppingСartLength(res);
    } else {
      var resEnd = this.props.reduxState.shoppingСart;
      console.log(resEnd);

      var resEnd2 = resEnd.concat(res);
      console.log(resEnd2);
      this.props.shoppingСart(resEnd2);
      this.props.shoppingСartLength(resEnd2);
    }
  };
}

function mapStateToProps(state) {
  return {
    reduxState: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    shoppingСart: i => dispatch(shoppingСart(i)),
    shoppingСartLength: i => dispatch(shoppingСartLength(i))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerOneProcessorAll);
