import React from "react";
import { connect } from "react-redux";
import "../../style/header.css";

import * as actions from "../../store/action/imageFilterAction";

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
        {/*section filter images*/}
        <select onChange={event => this.onChangeSection(event)}>
          <option value="hot">hot</option>
          <option value="top">top</option>
          <option value="user">user</option>
        </select>
        {/*sort filter images*/}
        <select
          className={`${sectionFilterValue === "user" ? "show" : "hide"}`}
          onChange={event => this.onChangeSort(event)}
        >
          <option value="viral">viral</option>
          <option value="top">top</option>
          <option value="time">time</option>
          <option value="rising">rising</option>
        </select>
        {/*windowP filter images*/}
        <select
          className={`${sectionFilterValue === "top" ? "show" : "hide"}`}
          onChange={event => this.onChangeWindow(event)}
        >
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
          <option value="year">year</option>
        </select>
        {/*toggle viral images*/}
        <label className="switch">
          <input type="checkbox" onClick={() => this.onChangeViral()} />
          <span className="slider round"></span>
        </label>{" "}
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
