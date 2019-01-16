import React, { Component } from "react";
import API from "../../utils/API";

class Friend extends Component {
  state = {
    userName: "User Name",
    avatar: "/assets/images/placeholder.jpg",
    score: 0,
    believability: 0,
    latest: [],
    achievements: []
  }

  loadAchievements = () =>{
    API.getAllChieves()
    .then(res => {
      console.log(res);
      this.setState({latest: res.data[4], achievements: res.data}); })
    .catch(err => console.log(err))
  }

  loadPlayer = () =>{
    API.getPlayer()
    .then(res => {
      // console.log(res);
      this.setState({userName: res.data[0].name, score: res.data[0].score, avatar: res.data[0].avatar, believability: res.data[0].believability}); })
    .catch(err => console.log(err))
  }
  
  componentDidMount() {
    this.loadPlayer();
    this.loadAchievements();
  }

  render () {
    return (
      <div className="container">

          <div className="row row1">
              <div>
                  <img className="avatar" src="/assets/images/placeholder.jpg" alt="Player Avatar"/>
              </div>
              <div className="playerInfo justify-content-start">
              <h1 className="playerName">{this.state.userName}</h1>
                  <h1>Score: {this.state.score}</h1>
                  <h1>Believability: {this.state.believability}</h1>

              </div>
          </div>

          <div className="row row2">
          <h3>Last achievement: </h3>
          <h3 className="achievement">{this.state.latest.name} - {this.state.latest.description} - {this.state.latest.worth} P</h3>
          </div>

          <div className="row row2">

          <h3 className="block">All Achieved:</h3>

          {this.state.achievements.length ? (
            <div>
                {this.state.achievements.map((chieves, index) => {
                  return (
                    <button className="achievement" key={index} data-id={chieves._id}>{chieves.name} - {chieves.description} - {chieves.worth} P</button>
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


export default Friend;