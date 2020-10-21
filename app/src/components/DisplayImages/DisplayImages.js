import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../../style/DisplayImage.css";

import * as actions from "../../store/action/imageFilterAction";

class DisplayImages extends React.Component {
  componentDidMount() {
    this.props.makeAPIcall();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.sectionFilterValue !== this.props.sectionFilterValue ||
      prevProps.viralFilter !== this.props.viralFilter ||
      prevProps.sortFilterValue !== this.props.sortFilterValue ||
      prevProps.windowFilter !== this.props.windowFilter
    ) {
      this.props.makeAPIcall();
    }
  }

  handleOpenImage(image) {
    this.props.history.push("/image", {
      image: image.images[0].link,
      title: image.title,
      description: image.images[0].description,
      upvotes: image.ups,
      downvotes: image.downs,
      score: image.score
    });
  }

  render() {
    const { imagesData } = this.props;
    console.log("hi");
    return (
      <div className="display-image">
        {imagesData
          ? imagesData.map(image => {
              if (image.images && image.images[0].type !== "video/mp4") {
                return (
                  <div
                    key={image.id}
                    className="image-card"
                    onClick={() => this.handleOpenImage(image)}
                  >
                    <img src={image.images[0].link || ""} />
                    <span className="img-desc">{image.title}</span>
                  </div>
                );
              }
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imagesData: state.images,
    sectionFilterValue: state.sectionFilterValue,
    sortFilterValue: state.sortFilterValue,
    viralFilter: state.viralFilter,
    windowFilter: state.windowFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeAPIcall: () => dispatch(actions.makeAPIcall())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DisplayImages)
);
