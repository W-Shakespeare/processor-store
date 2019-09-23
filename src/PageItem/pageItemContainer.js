import React from "react";
//import ProcessorDiv from './processorDiv';
import { connect } from "react-redux";
//import Btn from './btn.js'
//import processor from "./processor";
//import ProcessorItemComponent from './processorItemComponent'
import PageItemComponent from "./pageItemComponent";
import {
  addIdArr,
  shoppingСart,
  shoppingСartLength
} from "./duck/actions/actions";
import gpuProcessor from "./gpu";
import processor from "./processor";

class PageItemContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.productid);
    //this.scrollTo();
    this.procesorFilter();
  }
  render() {
    console.log(this.props);
    return (
      <PageItemComponent
        ShoppingСart={this.ShoppingСart}
        result={this.props.result.addIdArr}
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
    //console.log(props);
    var idItem = event.currentTarget;
    var idItem = idItem.name;
    console.log(idItem);
    console.log(this.props);
    var cart = this.props.result.allProcessorItem;
    var res = cart.filter(item => {
      return item.id == idItem;
    });
    if (this.props.result.shoppingСart.length == 0) {
      console.log(res);
      this.props.shoppingСart(res);
      this.props.shoppingСartLength(res);
    } else {
      var resEnd = this.props.result.shoppingСart;
      console.log(resEnd);

      var resEnd2 = resEnd.concat(res);
      console.log(resEnd2);
      this.props.shoppingСart(resEnd2);
      this.props.shoppingСartLength(resEnd2);
    }
  };

  procesorFilter = () => {
    var id = this.props.match.params.productid;
    if (id >= 1 && id <= 1000) {
      var arr = processor;
    }
    if (id >= 1001 && id <= 2000) {
      var arr = gpuProcessor;
    }
    var idArr = arr.filter(i => i.id == id);

    this.props.addIdArr(idArr);
    console.log(this.props);
    console.log(id);
    console.log(idArr);
    return idArr;
  };
}
const mapStateToProps = state => {
  return {
    result: state
  };
};
function mapDispatchToProps(dispatch) {
  return {
    addIdArr: i => dispatch(addIdArr(i)),
    shoppingСart: i => dispatch(shoppingСart(i)),
    shoppingСartLength: i => dispatch(shoppingСartLength(i))
  };
  //нужно отправить id сюда с index.js
}

//const PageItemContainer = connect(procesorFilter)(PageItemComponent);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageItemContainer);
