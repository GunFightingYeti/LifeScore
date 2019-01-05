import React from "react";

function Quiz(props) {
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

          <label htmlFor="born">How many "Earth years" have you survived?</label>
          <select id="born" className="form-control" required>
            <option value="" defaultValue>Choose...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>

        </div>

        <button className="btn btn-success my-3" type="button">Submit Answers</button>
      
      </form>
    </div>
  )
}

export default Quiz;
