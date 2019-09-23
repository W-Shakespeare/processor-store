import React from "react";
import { connect } from "react-redux";
import { addresult, allProcessorItem } from "./duck/actions/actions";
import ComponentContentSwitch from "./ComponentContentSwitch";
//import processors from "./processor";

class ContainerContentSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.algorithm();
    //this.f();
  }
  render() {
    console.log(this.props.reduxState.filterItems);
    return (
      <ComponentContentSwitch
        algorithm={this.algorithm}
        selectCheck={this.selectCheck}
      />
    );
  }
  componentDidMount() {
    this.scrollTo();
  }

  scrollTo() {
    window.scrollTo(0, 0);
  }
  f() {
    window.onload = () => {
      let allInput = document.getElementById("swi");
      allInput.addEventListener("click", this.algorithm);
    };
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
  selectCheck = props => {
    var select = document.getElementsByClassName("select-1");
    console.log(select[0].children[0].value);

    var arr = [];
    var result3 = this.props.reduxState.arrProcessorItem;
    var result2 = [...result3];
    console.dir(result2);
    for (var i = 0; i < select[0].length; i++) {
      if (select[0].children[i].selected) {
        if (select[0].children[i].value == 0) {
          var pr = [this.inpSearch()];
          var pr2 = pr[0];
          console.log(pr2);
          this.props.result(pr2);
          return;
        } else {
          var selectValue = select[0].children[i].value;
          arr.push(selectValue);
        }
      }
    }
    if (arr[0] == 1) {
      result2.sort((item1, item2) => item1.price2 - item2.price2);
    }
    if (arr[0] == 2) {
      result2.sort((item1, item2) => item2.price2 - item1.price2);
    }

    this.props.result(result2);

    console.log(arr);
  };
  algorithm = (props, event) => {
    /*
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

*/
    let obj = this.props.reduxState.filterItems;
    let processors = this.props.reduxState.allProcessorItem;
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
    result: i => dispatch(addresult(i)),
    start: i => dispatch(allProcessorItem(i))
    //filterItems: i => dispatch(filterItems(i))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerContentSwitch);
