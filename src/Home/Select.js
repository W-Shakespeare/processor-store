import React from "react";
import { connect } from "react-redux";
import { changedSelectBoolean } from "./duck/actions/actions";

function Select({ className, dispatch, reduxState }) {
  return (
    <select
      className={className}
      onChange={event => {
        event.preventDefault();
        console.log(event.target.value);
        dispatch(changedSelectBoolean(event.target.value));
      }}
    >
      {reduxState.selectItems.map((obj, index) => {
        return (
          <option
            key={index}
            className="select-option"
            value={obj.value}
            selected={obj.boolean}
          >
            {obj.value}
          </option>
        );
      })}
    </select>
  );
}

function mapStateToProps(state) {
  return {
    reduxState: state
  };
}
export default Select = connect(
  mapStateToProps,
  null
)(Select);
