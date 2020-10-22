import React from "react";

import "../../style/DisplayImage.css";

const ImageDetail = props => {
  return (
    <div className="image-detail">
      <div className="img-box">
        <h3> {props.location.state.title} </h3>
        <div>
          <img src={props.location.state.image} />
        </div>
        <h4> {props.location.state.description} </h4>
      </div>
      <div className="img-details">
        <div>
          <h3>Upvotes:</h3> {props.location.state.upvotes}
        </div>
        <div>
          <h3>Downvotes:</h3> {props.location.state.downvotes}
        </div>
        <div>
          <h3>Score:</h3> {props.location.state.score}
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
