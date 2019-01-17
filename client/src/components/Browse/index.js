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
      // console.log(res);
      this.setState({results: res.data, category: category})
      // .catch(err => console.log(err))
    });
  }

  getOneCategory = category => e => {
    API.getOneCategory(category)
    .then(res => {
      // console.log(res);
      this.setState({results: res.data, category: category})
      // .catch(err => console.log(err))
    });
  }

  getSaved = saved => e => {
    API.getSaved()
    .then(res => {
      // console.log(res);
      this.setState({results: res.data, category: saved})
      // .catch(err => console.log(err))
    });
  }

  saveChieve = id => e => {
    console.log(id);
    API.saveChieve(id)
    .then(res => {
      // console.log(res);
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
                <button className="homebtn" onClick={this.getOneCategory("Life")}>Life</button>
                <button className="homebtn" onClick={this.getOneCategory("Food")}>Food</button>
                <button className="homebtn" onClick={this.getOneCategory("Social")}>Social</button>
                <button className="homebtn" onClick={this.getOneCategory("Adventure")}>Adventure</button>
                <button className="homebtn" onClick={this.getOneCategory("Skills")}>Skills</button>
                <button className="homebtn" onClick={this.getOneCategory("Fun")}>Fun</button>
                <button className="homebtn" onClick={this.getOneCategory("Violent")}>Violent</button>
                <button className="homebtn" onClick={this.getSaved("Saved")}>Saved</button>

            </div>
        </div>

        <div className="row3">
            <div className="col-12 results">

            <h1>{this.state.category}</h1>

            {this.state.results.length ? (
              <div>
                  {this.state.results.map((chieves, index) => {
                    return (
                      <div key={index}>
                      <button className="savebtn float-left" onClick={this.saveChieve(chieves._id)} data-id={chieves._id}>Save</button> <button className="achievement">{chieves.name} - {chieves.description} = {chieves.worth} P</button>
                      </div>
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