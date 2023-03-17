import React from "react";
import { Avatar, Card, Col } from "antd";
import "./Card.css";
import stressed from './Moods/stressed.png';
import happy from './Moods/happpy.png';
const { Meta } = Card;

function MoodCard(props) {
  return (
<div>
    <Col span={4}>
      <Card
        id="moodCard" className={`card ${
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
        <Meta className="avatar-container"
          avatar={<Avatar className="avatar" src={`${
            props.title === "Stressed"
              ? stressed
              : props.title === "Happy"
              ? happy
              : ""
          }`}/>}
          title={props.title}
        />
      </Card>
    </Col>
    </div>
  );
}

export default MoodCard;
