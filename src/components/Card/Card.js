import React from "react";
import { Avatar, Card} from "antd";
import "./Card.css";
import stressed from './Moods/stressedv2.png';
import happy from './Moods/happyv2.png';
import sad from './Moods/sadv2.png';
import chilled from './Moods/chilledv2.png';
import overjoyed from './Moods/overjoyedv2.png';
const { Meta } = Card;

function MoodCard(props) {
  return (

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
        title={props.dateItem}
        bordered={true}
      >
        <Meta className="avatar-container"
          avatar={<Avatar className="avatar" src={`${
            props.title === "Stressed"
              ? stressed
              : props.title === "Sad"
              ? sad
              : props.title === "Happy"
              ? happy
              : props.title === "Chilled"
              ? chilled
              : props.title === "Overjoyed"
              ? overjoyed
              : ""
          }`}/>}
          title={props.title}
        />
      </Card>
   
  );
}

export default MoodCard;
