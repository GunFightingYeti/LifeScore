import React, { Component } from "react";
import API from "../../utils/API";

class Upload extends Component {
  state = {
    results: [],
    id: "5c3feac478de385b24ada735"
  }

  getOne = id => e => {
    console.log(id);
    API.getOneChieve(id)
    .then(res => {
      this.setState({results: res.data})

      // console.log(res);
      // .catch(err => console.log(err))
    });
  }
  
  componentDidMount() {
     this.getOne(this.state.id);
  }

  render () {
    return (
      <div className="container">
          <div className="row">

              <div className="pageTitle">
                  <h1 className=""><i className="fas fa-upload"></i>  Upload</h1>
              </div>

          </div>

          <div className="row3">
              <div className="col-12 results pb-3">

              <h1>Upload proof that you passed "{this.state.results.name}"</h1>

              <button className="achievement">{this.state.results.name} - {this.state.results.description} = {this.state.results.worth} S</button>

              <input type="file"></input>

              </div>
          </div>
      </div>
      );  
  }
}

export default Upload;