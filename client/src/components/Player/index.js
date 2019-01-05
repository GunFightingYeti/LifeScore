import React, { Component } from "react";
import API from "../../utils/API";

class Player extends Component {

  state = {
    userName: "",
    avatar: "",
    score: 0,
    believability: 0,
    latest: [],
    achievements: []
  }

  loadAchievements = () =>{
    API.getAchievements()
    .then(res => {
      console.log(res);
      this.setState({latest: res.data[0].name}); })
    .catch(err => console.log(err))
  }

  loadPlayer = () =>{
    API.getPlayer()
    .then(res => {
      console.log(res);
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
          <div className="row">

              <div className="pageTitle">
                  <h1 className=""><i className="fas fa-user"></i>  Me</h1>
              </div>

          </div>

          <div className="row row1">
              <div>
                  <img className="avatar" src={this.state.avatar} alt="Player Avatar"/>
              </div>
              <div className="playerInfo justify-content-start">
                  <h1 className="playerName">{this.state.userName}</h1>
                  <h1>Score: {this.state.score}</h1>
                  <h1>Believability: {this.state.believability}</h1>

              </div>
          </div>

          <div className="row row2">
          <h3>Latest: {this.state.latest}</h3>
          </div>

          <div className="row row2">
              <ul>
                <li className="achievement">Cut ties with all the lies you've been living in</li>
                <li className="achievement">Eat a 1,000,000+ scoville pepper</li>
                <li className="achievement">Break a brick with your hand (without breaking your hand)</li>
              </ul>
          </div>

      </div>
      );  
  }
}

export default Player;