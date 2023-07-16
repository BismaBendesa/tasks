import React from "react";

// props = {
//   content: "trophy-emoji",
//   top: "8%",
//   left: "10%",
// };

// props.content

export default function Emoji(props) {
  return (
    <div
      className="emoji"
      style={{
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
      }}
    >
      <img
        src={`../images/${props.content}.png`}
        alt={props.content}
        style={{
          width: "40px",
          height: "40px",
        }}
      />
    </div>
  );
}
