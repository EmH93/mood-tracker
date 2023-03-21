import React from "react";
import './ImageRow.css';

function ImageRow(props) {
  return <div id="imageRow" style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>{props.children}</div>;
}

export default ImageRow;
