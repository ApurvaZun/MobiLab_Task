import React from "react";
import { connect } from "react-redux";
import "../../style/header.css";

import * as actions from "../../store/action/imageFilterAction";
import SelectOption from "./SelectOption";

{
  /* Use this to create select options*/
}
const section = ["hot", "top", "user"];

const sort = ["viral", "top", "time", "rising"];

const windowVal = ["day", "week", "month", "year"];

class Header extends React.Component {
  onChangeSection(event) {
    this.props.setSectionFilter(event.target.value);
  }

  onChangeSort(event) {
    this.props.setSortFilter(event.target.value);
  }

  onChangeWindow(event) {
    this.props.setWindowFilter(event.target.value);
  }

  onChangeViral() {
    this.props.setViralFilter();
  }

  render() {
    const { sectionFilterValue } = this.props;
    return (
      <div className="header">
        <SelectOption
          onChangeHandle={event => this.onChangeSection(event)}
          optionObj={section}
          labelVal="Section"
        />
        <SelectOption
          onChangeHandle={event => this.onChangeSort(event)}
          optionObj={sort}
          classAdd={`${sectionFilterValue === "user" ? "show" : "hide"}`}
          labelVal="Sort"
        />
        <SelectOption
          onChangeHandle={event => this.onChangeWindow(event)}
          optionObj={windowVal}
          classAdd={`${sectionFilterValue === "top" ? "show" : "hide"}`}
          labelVal="Window"
        />
        <p>
          Viral &nbsp;
          <label className="switch">
            <input type="checkbox" onClick={() => this.onChangeViral()} />
            <span className="slider round"></span>
          </label>{" "}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sectionFilterValue: state.sectionFilterValue,
    sortFilterValue: state.sortFilterValue,
    windowFilter: state.windowFilter,
    imagesData: state.images
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setViralFilter: () => dispatch(actions.setViralFilter()),
    setSectionFilter: section => dispatch(actions.setSectionFilter(section)),
    setSortFilter: sort => dispatch(actions.setSortFilter(sort)),
    setWindowFilter: windowVal => dispatch(actions.setWindowFilter(windowVal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
