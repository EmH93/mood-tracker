import React, { useState, useEffect } from "react";
import MoodCard from "../../components/Card/Card";
import Form from "../../components/FormFolder/Form";
import "./MoodDiary.css";
import { Row,Col,Divider} from "antd";
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
        Mood Diary
      </h3>
      <p>Select the date and your mood from the options below</p>
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
      <Divider orientation="middle">Entries</Divider>
      <Row gutter={[16,24]} justify="center">
       
          
              {Object.values(diary).map((item, index) => {
                const objKey = getKeyByValue(diary, item);
                return  <Col className="gutter-row" sm={12} xl={6}> 
                <MoodCard key={index} title={item} date={objKey} />
                </Col>
              })}
       
     
        
      </Row>
      <Row gutter={[24,16]} justify="center">
          <Col>
            <ClearButton onClick={handleClearButton}/>
          </Col>
      </Row>
        
    </div>
  );
}
export default MoodDiary;
