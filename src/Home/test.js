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
          return acc.push(next);
        }
      }
      return acc;
    }, []);
    this.props.result(arr);
    return arr;
  }
};
