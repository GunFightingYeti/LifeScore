import React, { Component } from "react";
import API from "../../utils/API";

class Player extends Component {

  state = {
    Username: "Username",
    avatar: "/assets/images/placeholder.jpg",
    score: 0,
    believability: 0,
    latest: [],
    results: []
  }

 loadPassed = () => {
    API.getPassed()
    .then(res => {
      console.log(res);
      this.setState({results: res.data, latest: res.data[0]})
      // .catch(err => console.log(err))
    });
  }

  loadPlayer = () =>{
    API.getPlayer()
    .then(res => {
      // console.log(res);
      this.setState({Username: res.data[0].name, score: res.data[0].score, avatar: res.data[0].avatar, believability: res.data[0].believability}); })
    .catch(err => console.log(err))
  }
  
  componentDidMount() {
    this.loadPlayer();
    this.loadPassed();
  }

  render () {
    return (
      <div className="container">
          <div className="row">

              <div className="pageTitle">
                  <h1><i className="fas fa-user"></i>  Me</h1>
              </div>

          </div>

          <div className="row row1">
              <div>
                  <img className="avatar" src={this.state.avatar} alt="Player Avatar"/>
              </div>
              <div className="playerInfo justify-content-start">
                  <h1 className="playerName">{this.state.Username}</h1>
                  <h1>Score: {this.state.score}</h1>
                  <h1>Believability: {this.state.believability}</h1>
              </div>
          </div>

          <div className="row row2">
          <h3>Last achievement: </h3>
          <h3 className="achievement">{this.state.latest.name} - {this.state.latest.description} = {this.state.latest.worth} S</h3>
          </div>


          <div className="row row2">

          <h3 className="block">All Achieved:</h3>

          {this.state.results.length ? (
            <div>
                {this.state.results.map((chieves, index) => {
                  return (
                    <button className="achievement" key={index} data-id={chieves._id}>{chieves.name} - {chieves.description} = {chieves.worth} S</button>
                  );
                })}
            </div>
          ) : (
            <h2>Seize the day!</h2>
          )}

            </div>
          </div>
      );  
  }
}

export default Player;