import React from "react";

import "../../style/DisplayImage.css";

const ImageDetail = props => {
  return (
    <div className="image-detail">
      <div className="img-details">
        <div> {props.location.state.description} </div>
        <div>
          <h3>Upvotes:</h3> {props.location.state.upvotes}{" "}
        </div>
        <div>
          <h3>Downvotes:</h3> {props.location.state.downvotes}{" "}
        </div>
        <div>
          <h3>Score:</h3> {props.location.state.score}{" "}
        </div>
      </div>
      <div className="img-box">
        <h2> {props.location.state.title} </h2>
        <div>
          <img src={props.location.state.image} />
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
