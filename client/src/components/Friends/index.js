import React, { Component } from "react";
import API from "../../utils/API";

class Friends extends Component {
  state = {
    friends: []
  }

  loadPlayer = () =>{
    API.getPlayer()
    .then(res => {
      // console.log(res);
      this.setState({friends: res.data[0].friends}); })
    .catch(err => console.log(err))
  }
  
  componentDidMount() {
    this.loadPlayer();
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

                {this.state.friends.length ? (
                  <div>
                      {this.state.friends.map((friend, index) => {
                        return (
                          <a href="/friend" key={index}><button className="friendCard" data={friend}>{friend}</button></a>
                        );
                      })}
                  </div>
                ) : (
                  <h2>Go forth and make friends!</h2>
                  )}

              </div>
          </div>
      </div>
    );  
  }
}

export default Friends;