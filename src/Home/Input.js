import React from "react";
import { connect } from "react-redux";
import { changedInputSearch } from "./duck/actions/actions";
function Input({ type, className, id, dispatch, reduxState }) {
  return (
    <input
      type={type}
      className={className}
      id={id}
      onChange={e => {
        e.preventDefault();
        dispatch(changedInputSearch(e.target.value));
      }}
      value={reduxState}
    />
  );
}

function mapStateToProps(state) {
  return {
    reduxState: state.inputSearchText[0].value
  };
}
export default Input = connect(
  mapStateToProps,
  null
)(Input);
//console.log("changedInputSearch".toUpperCase())
