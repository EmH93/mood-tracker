import React from 'react';
import './Form.css';
function Form(props) {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let moodObj= JSON.parse(localStorage.getItem('moodDiary') || '{}')
    console.log(typeof moodObj)
  
    moodObj[props.date]=props.mood
    
    localStorage.setItem('moodDiary',JSON.stringify(moodObj))
    console.log("form.js " + JSON.stringify(moodObj))
    props.setDate('');
    props.setMood('');
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
            id="selectInput"
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
