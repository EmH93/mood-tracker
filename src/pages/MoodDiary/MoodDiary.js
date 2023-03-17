import React, { useState, useEffect } from "react";
import MoodCard from "../../components/Card/Card";
import Form from "../../components/FormFolder/Form";
import "./MoodDiary.css";
import { Row } from "antd";
import getKeyByValue from "../../utils/getKeyHook";

function MoodDiary() {
  const [selectedDate, setSelectedDate] = useState("");
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

    moodObj[selectedDate] = selectedMood;

    localStorage.setItem("moodDiary", JSON.stringify(moodObj));
    console.log("form.js " + JSON.stringify(moodObj));
    setSelectedDate("");
    setSelectedMood("");
  };

  return (
    <div className="mood-container">
      <div>
        <Form
          handleFormSubmit={handleFormSubmit}
          date={selectedDate}
          mood={selectedMood}
          setMood={setSelectedMood}
          setDate={setSelectedDate}
        />
        <Row gutter={16}>
          {Object.values(diary).map((item, index) => {
            const objKey = getKeyByValue(diary, item);
            return <MoodCard title={item} date={objKey} />;
          })}
        </Row>
      </div>
    </div>
  );
}
export default MoodDiary;
