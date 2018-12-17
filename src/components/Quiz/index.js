import React from "react";
import "../../app.css";

function Questionnaire(props) {
  return (
    <div className="container">

      <div className="row">
        <div className="pageTitle">
            <h1 className=""><i className="fas fa-feather-alt"></i> Quiz</h1>
        </div>
      </div>
      <form>
        <div className="form-group col-auto">

          <label htmlFor="born">Have you been born yet?</label>
          <select id="born" className="form-control" required>
            <option value="" defaultValue>Choose...</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <label htmlFor="born">Have you been born yet?</label>
          <select id="born" className="form-control" required>
            <option value="" defaultValue>Choose...</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

        </div>

        <button className="btn btn-success my-3" type="submit">Submit Answers</button>
      
      </form>
    </div>
  )
}

export default Questionnaire;
