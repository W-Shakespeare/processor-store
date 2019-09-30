import React from "react";
import { connect } from "react-redux";
import PageItemComponent from "./pageItemComponent";
import { addIdArr } from "./duck/actions/actions";

class PageItemContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.productid);
    this.procesorFilter();
  }
  render() {
    return (
      <PageItemComponent
        ShoppingСart={this.ShoppingСart}
        result={this.props.reduxSate.addIdArr}
      />
    );
  }
  componentDidMount() {
    this.scrollTo();
  }
  scrollTo() {
    window.scrollTo(0, 0);
  }

  procesorFilter = () => {
    let id = this.props.match.params.productid;
    let allProcessorItem = this.props.reduxSate.allProcessorItem;
    let selectedProcessor = allProcessorItem.filter(i => i.id == id);
    this.props.dispatch(addIdArr(selectedProcessor));
  };
}
const mapStateToProps = state => {
  return {
    reduxSate: state
  };
};

export default connect(
  mapStateToProps,
  null
)(PageItemContainer);
