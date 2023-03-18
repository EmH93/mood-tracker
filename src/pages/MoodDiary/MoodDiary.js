import React, { useState, useEffect } from "react";
import MoodCard from "../../components/Card/Card";
import Form from "../../components/FormFolder/Form";
import "./MoodDiary.css";
import { Row } from "antd";
import getKeyByValue from "../../utils/getKeyHook";
import ClearButton from "../../components/ClearAllBtn/ClearAllBtn";

function MoodDiary() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [moodDiary, setMoodDiary] = useState("")
  const [diary, setDiary] = useState(moodDiary);
  
  useEffect(() => {
    const mood = localStorage.getItem("moodDiary") ? localStorage.getItem("moodDiary") : "{}";
    setMoodDiary(JSON.parse(mood))
    setDiary(moodDiary);
  }, [moodDiary]);

  const handleClearButton = () => {
    if(Object.keys(moodDiary).length > 0){
      
      localStorage.removeItem("moodDiary");
      const emptyDiary = localStorage.getItem("moodDiary")
      ? localStorage.getItem("moodDiary")
      : "{}";
      setMoodDiary(emptyDiary)
     
    };
  
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    let moodObj = JSON.parse(localStorage.getItem("moodDiary") || "{}");
    moodObj[selectedDate] = selectedMood;
    localStorage.setItem("moodDiary", JSON.stringify(moodObj));
    setSelectedDate("");
    setSelectedMood("");
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
            mood={selectedMood}
            setMood={setSelectedMood}
            setDate={setSelectedDate}
          />
   
        </div>
        
      </div>
      <Row gutter={16}>
            {Object.values(diary).map((item, index) => {
              const objKey = getKeyByValue(diary, item);
              return <MoodCard key={index} title={item} date={objKey} />;
            })}
          </Row>
        
          <ClearButton onClick={handleClearButton}/> 
        
    </div>
  );
}
export default MoodDiary;
