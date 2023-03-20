import React from "react";
import { Avatar, Card, Tooltip} from "antd";
import {DeleteOutlined} from '@ant-design/icons';
import "./Card.css";
import stressed from './Moods/stressedv2.png';
import happy from './Moods/happyv2.png';
import sad from './Moods/sadv2.png';
import chilled from './Moods/chilledv2.png';
import overjoyed from './Moods/overjoyedv2.png';

const { Meta } = Card;

function MoodCard(props) {
  const deleteEntry = () => {
    const obj = JSON.parse(localStorage.getItem("moodDiary"));
    if (Object.keys(obj).length >  0) {
      console.log(obj)
      const Itemkey = props.dateItem
      delete(obj[Itemkey])
      console.log(obj)
      localStorage.setItem("moodDiary",JSON.stringify(obj))
      props.setDiary(obj)

    }
 

  }
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
      
        actions={[
          <Tooltip title="delete entry">
              
              <DeleteOutlined key="delete" onClick={deleteEntry}
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
              
              />
          </Tooltip>
         
     
]}
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
