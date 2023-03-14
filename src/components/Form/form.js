import React from "react";

function Form() {
  return (
    <div>
      <form className="form" style={{ maxWidth: "400px" }}>
        <div className="form-group">
          <label htmlFor="dateInput">Select a date:</label>
          <input
            // value={formData.firstName}
            name="date"
            // onChange={handleInputChange}
            type="date"
            className="form-control"
            id="dateInput"
            placeholder="YYYY-MM-DD"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="selectInput">Select mood:</label>
          <select className="form-control" id="selectInput" required>
            <option value="">-- Select an option --</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        {/* <button onClick={handleFormSubmit} className="btn btn-primary">
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default Form;
