import React, { Component } from "react";
import API from "../../utils/API";

class Stats extends Component {
  state = {
    saved: []
  }

  getSaved = () => {
    API.getSaved()
    .then(res => {
      console.log(res);
      this.setState({saved: res.data})
      // .catch(err => console.log(err))
    });
  }
  
  componentDidMount() {
    this.getSaved();
  }

  render () {
    return (
      <div className="container">
          <div className="row">

              <div className="pageTitle">
                  <h1 className=""><i className="fas fa-user"></i>  Saved</h1>
              </div>

          </div>

          <div className="row3">
              <div className="col-12 results">

              {this.state.saved.length ? (
                    <div>
                        {this.state.saved.map((chieves, index) => {
                          return (
                            <button className="achievement" key={index} data-id={chieves._id}>{chieves.name} - {chieves.description} - {chieves.worth} P</button>
                          );
                        })}
                    </div>
                  ) : (
                    <h2>Save some chieves already!</h2>
                    )}

              </div>
          </div>
      </div>
      );  
  }
}

export default Stats;