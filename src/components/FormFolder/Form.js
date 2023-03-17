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
              className={`form-control ${
                props.mood === "option1"
                  ? "selectedOption1"
                  : props.mood=== "option2"
                  ? "selectedOption2"
                  :props.mood === "option3"
                  ? "selectedOption3"
                  : props.mood === "option4"
                  ? "selectedOption4" 
                  :props.mood === "option5"
                  ? "selectedOption5" : ""
              }`}
            id= "selectInput"
            required
            value={props.mood}
            onChange={(event) => props.setMood(event.target.value)}
          >
            <option value="" >-- Select an option --</option>
            <option value="Stressed">Stressed</option>
            <option value="Sad">Sad</option>
            <option value="Chilled">Chilled</option>
            <option value="Happy">Happy</option>
            <option value="Overjoyed">Overjoyed</option>
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
