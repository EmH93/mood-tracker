import React from "react";
import './ImageRow.css';

function ImageRow(props) {
  return <div className="ImageRow">{props.children}</div>;
}

export default ImageRow;
