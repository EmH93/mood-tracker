import React from "react";
import "./Form.css";
function Form(props) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleFormSubmit}>
        <div className="form-group">
          <input
            name="date"
            type="date"
            className="form-control"
            id="dateInput"
            placeholder="Select a date"
            required
            value={props.date}
            onChange={(event) => props.setDate(event.target.value)}
          />
        </div>

        <div className="form-group mood-input">
          <select
            className={`${
              props.mood === "Stressed"
                ? "selectedOption1"
                : props.mood === "Sad"
                ? "selectedOption2"
                : props.mood === "Chilled"
                ? "selectedOption3"
                : props.mood === "Happy"
                ? "selectedOption4"
                : props.mood === "Overjoyed"
                ? "selectedOption5"
                : ""
            }`}
            id="selectInput"
            required
            value={props.mood}
            onChange={(event) => props.setMood(event.target.value)}
          >
            <option value="">-- Select a mood --</option>
            <option value="Stressed">😥 Stressed</option>
            <option value="Sad">☹️ Sad</option>
            <option value="Chilled">😊 Chilled</option>
            <option value="Happy">😃 Happy</option>
            <option value="Overjoyed">😁 Overjoyed</option>
          </select>
        </div>

        <div className="btn-container">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div> 
      </form>
    </div>
  );
}

export default Form;
