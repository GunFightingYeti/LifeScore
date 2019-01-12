import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
  state = {
    userName: "User Name",
    avatar: "/assets/images/placeholder.jpg",
    score: 0,
    believability: 0,
    latest: [],
    achievements: []
  }

  loadAchievements = () =>{
    API.getAchievements()
    .then(res => {
      this.setState({latest: res.data[0].name}); })
    .catch(err => console.log(err))
  }

  loadPlayer = () =>{
    API.getPlayer()
    .then(res => {
      this.setState({userName: res.data[0].name, score: res.data[0].score, avatar: res.data[0].avatar, believability: res.data[0].believability}); })
    .catch(err => console.log(err))
  }
  
  componentDidMount() {
    this.loadPlayer();
    this.loadAchievements();
  }

  render () {
      return (
    <div className="container home">

        <div className="row row1">
            <div>
                <a href="/player"><img className="avatar" src={this.state.avatar} alt="Player Avatar"/></a>
            </div>
            <div className="playerInfo justify-content-start">
                <h1>{this.state.userName}</h1>
                <h1>Score: {this.state.score}</h1>
                <h1>Believability: {this.state.believability}</h1>
            </div>
        </div>

        <div className="row row2">
        <h3>Latest: <span className="latest">{this.state.latest}</span></h3>
        </div>

        <div className="row row3">
            <div className="col-12">

                <a className="homebtn" href="/browse">Browse</a>
                <a className="homebtn" href="/friends">Friends</a>
                <a className="homebtn" href="/stats">Stats</a>
                <a className="homebtn" href="/saved">Saved</a>

            </div>
        </div>

    </div>
    );
  }
}

export default Home;