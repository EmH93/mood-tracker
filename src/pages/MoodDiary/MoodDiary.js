import React, { useState, useEffect } from "react";
import MoodCard from "../../components/Card/Card";
import Form from "../../components/FormFolder/Form";
import moment from "moment";
import "./MoodDiary.css";
import { Row } from "antd";
import getKeyByValue from "../../utils/getKeyHook";

function MoodDiary() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const mood = localStorage.getItem("moodDiary")
    ? localStorage.getItem("moodDiary")
    : "{}";
  const [diary, setDiary] = useState(JSON.parse(mood));

  useEffect(() => {
    setDiary(JSON.parse(mood));
  }, [mood]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let moodObj = JSON.parse(localStorage.getItem("moodDiary") || "{}");
    console.log(typeof moodObj);

    let dateTime = moment(selectedDate).format('MMMM d, YYYY')  + '  -  ' + selectedTime;

    moodObj[dateTime] = selectedMood;

    localStorage.setItem("moodDiary", JSON.stringify(moodObj));
    setSelectedDate("");
    setSelectedMood("");
    setSelectedTime("");
  };

  return (
    <div className="mood-wrapper">
        <div className="form-label-container">
        <h3 className="form-label">
        Select the date and your mood from the options below
      </h3>
        </div>
      <div className="mood-container">
        <div>
          <Form
            handleFormSubmit={handleFormSubmit}
            date={selectedDate}
            time={selectedTime}
            mood={selectedMood}
            setMood={setSelectedMood}
            setDate={setSelectedDate}
            setTime={setSelectedTime}
          />
   
        </div>
        
      </div>
      <Row className="cards-wrapper" gutter={16}>
            {Object.values(diary).map((item, index) => {
              const objKey = getKeyByValue(diary, item);
              return <MoodCard title={item} date={objKey} />;
            })}
          </Row>
    </div>
  );
}
export default MoodDiary;
