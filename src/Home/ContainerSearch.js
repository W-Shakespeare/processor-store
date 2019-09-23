import React from "react";
import ComponentSearch from "./ComponentSearch";
import { connect } from "react-redux";
import { addresult } from "./duck/actions/actions";
import processors from "./processor";

class ContainerSearch extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ComponentSearch inpSearch={this.inpSearch} />;
  }

  inpSearch = props => {
    let inpSearchValue = document.getElementsByClassName("inpSearch")[0].value;
    let result = this.props.reduxState.arrProcessorItem;
    if (result.length == 0) {
      return this.inpSearch2();
    } else {
      if (inpSearchValue == 0) {
        return this.algorithm();
      }
      let result = this.algorithm();
      let reg = new RegExp(inpSearchValue, "i");
      let arr = result.reduce((acc, next) => {
        for (this.key in next) {
          if (reg.test(next[this.key])) {
            acc.push(next);
            return acc;
          }
        }
        return acc;
      }, []);
      this.props.result(arr);
      return arr;
    }
  };
  inpSearch2 = props => {
    let inpSearchValue = document.getElementsByClassName("inpSearch")[0].value;
    let result = this.algorithm();
    if (result.length == 0) {
      return this.algorithm();
    }
    if (inpSearchValue == 0) {
      return this.algorithm();
    }
    let reg = new RegExp(inpSearchValue, "i");
    let arr = result.reduce((acc, next) => {
      for (this.key in next) {
        if (reg.test(next[this.key])) {
          acc.push(next);
          return acc;
        }
      }
      return acc;
    }, []);
    this.props.result(arr);
    return arr;
  };
  algorithm = props => {
    let processorArr = createArr("processor");
    let processorFamilyArr = createArr("processorFamily");
    let yadroArr = createArr("yadro");

    let processorArrCheck = filterCheck(processorArr);
    let processorFamilyCheck = filterCheck(processorFamilyArr);
    let yadroArrCheck = filterCheck(yadroArr);

    function createArr(classNameItem) {
      let inputItem = document.getElementsByClassName(classNameItem);
      let arrItem = [];
      for (let i = 0; i < inputItem.length; i++) {
        let oneInpElement = inputItem[i];
        let objectInp = {
          checked: oneInpElement.checked,
          value: oneInpElement.value
        };
        arrItem.push(objectInp);
      }
      return arrItem;
    }
    function filterCheck(arr) {
      let checkedArr = arr
        .filter(item => {
          return item.checked == true;
        })
        .map(item => item.value);
      console.log(checkedArr);
      return checkedArr;
    }

    let yadro = ChangeArrToObj(yadroArrCheck);
    let classs = ChangeArrToObj(processorArrCheck);
    let processorFamily = ChangeArrToObj(processorFamilyCheck);

    function ChangeArrToObj(arr) {
      let item = arr.reduce((acc, next) => {
        acc[next] = true;
        return acc;
      }, {});

      return item;
    }

    const obj = {
      yadro: yadro,
      classs: classs,
      processorFamily: processorFamily
    };

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
    this.props.result(result);
    return result;
  };
}
function mapStateToProps(state) {
  return {
    reduxState: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    result: i => dispatch(addresult(i))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerSearch);
