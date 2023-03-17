import React from "react";
import { Avatar, Card, Col } from "antd";
import "./Card.css";
const { Meta } = Card;

function MoodCard(props) {
  return (
<div>
    <Col span={4}>
      <Card
        className={`card ${
          props.title === "Stressed"
            ? "selectedOption1"
            : props.title === "Sad"
            ? "selectedOption2"
            : props.title === "Chilled"
            ? "selectedOption3"
            : props.title === "Happy"
            ? "selectedOption4"
            : props.title === "Overjoyed"
            ? "selectedOption5"
            : ""
        }`}
        title={props.date}
        bordered={true}
      >
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random?key=1" />}
          title={props.title}
        />
      </Card>
    </Col>
    </div>
  );
}

export default MoodCard;
