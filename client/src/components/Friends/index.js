import React, { Component } from "react";
import API from "../../utils/API";

class Friends extends Component {
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
                  <h1 className=""><i className="fas fa-user-friends"></i> Friends</h1>
              </div>

          </div>

          <div className="row3">
              <div className="col-12">

                  <a href="/friend"><button className="friendCard">GunFightingYeti</button></a>
                  <a href="/friend"><button className="friendCard">Knurtts</button></a>
                  <a href="/friend"><button className="friendCard">Scarab27</button></a>
                  <a href="/friend"><button className="friendCard">Drizzt172</button></a>
                  <a href="/friend"><button className="friendCard">WriterManda</button></a>
                  <a href="/friend"><button className="friendCard">GenZip</button></a>
                  <a href="/friend"><button className="friendCard">Krontime</button></a>
                  <a href="/friend"><button className="friendCard">Gummybearx3</button></a>
                  <a href="/friend"><button className="friendCard">SassyCat</button></a>

              </div>
          </div>
      </div>
    );  
  }
}

export default Friends;