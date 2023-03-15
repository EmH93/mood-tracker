import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedMood, setSelectedMood] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem(selectedDate, selectedMood);
    setSelectedDate("");
    setSelectedMood("");
  };

  return (
    <div>
      <form className="form" style={{ maxWidth: "400px" }} onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="dateInput">Select a date:</label>
          <input
            name="date"
            type="date"
            className="form-control"
            id="dateInput"
            placeholder="YYYY-MM-DD"
            required
            value={selectedDate}
            onChange={(event) => setSelectedDate(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectInput">Select mood:</label>
          <select
              className={`form-control ${
                selectedMood === "option1"
                  ? "selectedOption1"
                  : selectedMood === "option2"
                  ? "selectedOption2"
                  :selectedMood === "option3"
                  ? "selectedOption3": ""
              }`}
            id= "selectInput"
            required
    
            value={selectedMood}
            onChange={(event) => setSelectedMood(event.target.value)}
          >
            <option value="">-- Select an option --</option>
            <option value="Stressed">Stressed</option>
            <option value="Sad">Sad</option>
            <option value="Chilled">Chilled</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
