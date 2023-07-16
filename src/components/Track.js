import React from "react";

export default function Track(props) {
  return (
    <div className="track">
      <div className="track-image">
        <img src={`../images/${props.trackImg}.png`} alt={props.trackImg} />
        <div
          className="track-image-bg"
          style={{ background: props.bgColor }}
        ></div>
      </div>
      <div className="track-details">
        <span className="track-details-year">{props.trackYear}</span>
        <h1 className="track-details-title">{props.trackTitle}</h1>
        <span className="track-details-singer">by {props.trackSinger}</span>
      </div>
    </div>
  );
}
