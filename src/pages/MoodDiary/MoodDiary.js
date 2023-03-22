import React, { useState, useEffect } from "react";
import MoodCard from "../../components/Card/Card";
import Form from "../../components/FormFolder/Form";
import moment from "moment";
import "./MoodDiary.css";
import { Row, Col, Divider, Alert} from "antd";
import getValueByKey from "../../utils/getValueHook";
import ClearButton from "../../components/ClearAllBtn/ClearAllBtn";

function MoodDiary() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [visibleAlert, setVisibleAlert] = useState(false);
  const [moodDiary, setMoodDiary] = useState(
    JSON.parse(localStorage.getItem("moodDiary") || "{}")
  );

  useEffect(() => {
    //removed the code inside here because setting states inside useEffects caused an infite loop
  }, [moodDiary,visibleAlert]);

  const closeAlert = () =>{
    setSelectedDate("");
    setSelectedMood("");
    setSelectedTime("");
    setVisibleAlert(false);
  }

  const handleClearButton = () => {
    if (Object.keys(moodDiary).length > 0) {
      localStorage.removeItem("moodDiary");
      const emptyDiary = localStorage.getItem("moodDiary")
        ? JSON.parse(localStorage.getItem("moodDiary"))
        : JSON.parse("{}");
      setMoodDiary(emptyDiary);
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const currentDate = moment().format("YYYY-MM-DD");
    const inputDate = moment(selectedDate).format("YYYY-MM-DD");
    console.log(currentDate, inputDate);

    if (
      moment(inputDate).isBefore(currentDate) ||
      moment(inputDate).isSame(currentDate)
    ) {
      let moodObj = JSON.parse(localStorage.getItem("moodDiary") || "{}");

      let dateTime =
        moment(selectedDate).format("dddd, DD-MM-YYYY") +
        "  -  " +
        selectedTime;

      moodObj[dateTime] = selectedMood;

      localStorage.setItem("moodDiary", JSON.stringify(moodObj));
      setMoodDiary(moodObj);
      setSelectedDate("");
      setSelectedMood("");
      setSelectedTime("");
    } else {
      // alert("The input date is in the future. Please enter a valid date!");
      setVisibleAlert(true);
    }
  };

  return (
    <div className="mood-wrapper">
      <Row className="form-label-container" justify="center">
        <Col className="gutter-row" xs={13} xl={24}>
          <h3 className="mood-page-heading">Mood Diary</h3>
        </Col>

        <Col className="gutter-row" xs={14} xl={24}>
          <p className="form-label">
            Select the date, the time and your mood from the options below
          </p>
        </Col>
      </Row>
      <div>
        <div className="alertModal">
        {visibleAlert && (
            <Alert
              message="The input date is in the future. Please enter a valid date!"
              type="warning"
              closable
              onClose={closeAlert}
            />
          )}
        </div>
  
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
      <Divider orientation="middle">Entries</Divider>

      <Row className="cards-wrapper" gutter={[16, 24]} justify="center">
        {Object.keys(moodDiary).map((datekey, index) => {
          const objVal = getValueByKey(moodDiary, datekey);

          return (
            <Col className="gutter-row">
              <MoodCard
                key={index}
                title={objVal}
                dateItem={datekey}
                setDiary={setMoodDiary}
              />
            </Col>
          );
        })}
      </Row>
      <Row gutter={[24, 16]} justify="center">
        <Col>
          <ClearButton onClick={handleClearButton} obj={moodDiary} />
        </Col>
      </Row>
    </div>
  );
}
export default MoodDiary;
