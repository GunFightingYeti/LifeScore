import React, { Component } from "react";
import API from "../../utils/API";

class Home extends Component {
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
      this.setState({Username: res.data[0].name, score: res.data[0].score, avatar: res.data[0].avatar, believability: res.data[0].believability}); })
    .catch(err => console.log(err))
  }
  
  componentDidMount() {
    this.loadPlayer();
    this.loadPassed();
  }

  render () {
      return (
    <div className="container home">

        <div className="row row1">
            <div>
                <a href="/player"><img className="avatar" src={this.state.avatar} alt="Player Avatar"/></a>
            </div>
            <div className="playerInfo justify-content-start">
                <h1>{this.state.Username}</h1>
                <h1>Score: {this.state.score}</h1>
                <h1>Believability: {this.state.believability}</h1>
            </div>
        </div>

        <div className="row row2">
        <h3>Last achievement: </h3>
        <h3 className="achievement">{this.state.latest.name} - {this.state.latest.description} = {this.state.latest.worth} S</h3>
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