import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
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
    .then(res => this.setState({latest: res.data.name}))
    .catch(err => console.log(err))
  }

  loadPlayer = () =>{
    API.getPlayer()
    .then(res => this.setState({userName: res.data.name, score: res.data.score, avatar: res.data.avatar, believability: res.data.believability}))
    .catch(err => console.log(err))
  }
  
  componentDidMount() {
    this.loadPlayer();
    this.loadAchievements();
    console.log("Achievements:\n", this.state.achievements);
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
        <h3 className="achievement">Latest: {this.state.latest}</h3>
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