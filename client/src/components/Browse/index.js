import React, { Component } from "react";
import API from "../../utils/API";

class Browse extends Component {

  state = {
    results: [],
    category: "",
  }

  getAll = category => e => {
    API.getAllChieves(category)
    .then(res => {
      console.log(res);
      this.setState({results: res.data, category: category})
      // .catch(err => console.log(err))
    });
  }

  getOne = category => e => {
    API.getOneCategory(category)
    .then(res => {
      console.log(res);
      this.setState({results: res.data, category: category})
      // .catch(err => console.log(err))
    });
  }

render() {
    return (
    <div className="container">
        <div className="row">

            <div className="pageTitle">
                <h1><i className="fas fa-journal-whills"></i> Browse</h1>
            </div>

        </div>

        <div className="row3">
            <div className="col-12">

                <button className="homebtn" onClick={this.getAll("All")}>All</button>
                <button className="homebtn" onClick={this.getOne("Life")}>Life</button>
                <button className="homebtn" onClick={this.getOne("Food")}>Food</button>
                <button className="homebtn" onClick={this.getOne("Social")}>Social</button>
                <button className="homebtn" onClick={this.getOne("Adventure")}>Adventure</button>
                <button className="homebtn" onClick={this.getOne("Skills")}>Skills</button>
                <button className="homebtn" onClick={this.getOne("Fun")}>Fun</button>
                <button className="homebtn" onClick={this.getOne("Violent")}>Violent</button>
                <button className="homebtn" onClick={this.getOne("Saved")}>Saved</button>

            </div>
        </div>

        <div className="row3">
            <div className="col-12" id="results">

            <h1>{this.state.category}</h1>

            {this.state.results.length ? (
              <div>
                  {this.state.results.map((chieves, index) => {
                    return (
                      <button className="achievement" key={index} data-id={chieves._id}>{chieves.name} - {chieves.description} - {chieves.worth} P</button>
                    );
                  })}
              </div>
            ) : (
              <h2>Choose a category to search</h2>
            )}

          </div>
      </div>
    </div>
    );  
}
}

export default Browse;