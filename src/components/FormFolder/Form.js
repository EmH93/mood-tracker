import React from 'react';
import './Form.css';
function Form(props) {

  return (
    <div>
      <form className="form" style={{ maxWidth: "400px" }} onSubmit={props.handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="dateInput">Select a date:</label>
          <input
            name="date"
            type="date"
            className="form-control"
            id="dateInput"
            placeholder="YYYY-MM-DD"
            required
            value={props.date}
            onChange={(event) => props.setDate(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectInput">Select mood:</label>
          <select
              className={` ${
                props.mood === "Stressed"
                  ? "selectedOption1"
                  : props.mood=== "Sad"
                  ? "selectedOption2"
                  :props.mood === "Chilled"
                  ? "selectedOption3"
                  : props.mood === "Happy"
                  ? "selectedOption4" 
                  :props.mood === "Overjoyed"
                  ? "selectedOption5" : ""
              }`}
            id= "selectInput"
            required
            value={props.mood}
            onChange={(event) => props.setMood(event.target.value)}
          >
            <option value="" >-- Select a mood --</option>
            <option value="Stressed">😥 Stressed</option>
            <option value="Sad">☹️ Sad</option>
            <option value="Chilled">😊 Chilled</option>
            <option value="Happy">😃 Happy</option>
            <option value="Overjoyed">😁 Overjoyed</option>
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
