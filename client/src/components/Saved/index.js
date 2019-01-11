import React, { Component } from "react";
// import API from "../../utils/API";

class Stats extends Component {
  state = {
    saved: []
  }

  // loadPlayer = () =>{
  //   API.getPlayer()
  //   .then(res => {
  //     // console.log(res);
  //     this.setState({friends: res.data[0].friends}); })
  //   .catch(err => console.log(err))
  // }
  
  // componentDidMount() {
  //   this.loadPlayer();
  // }

  render () {
    return (
      <div className="container">
          <div className="row">

              <div className="pageTitle">
                  <h1 className=""><i className="fas fa-user"></i>  Saved</h1>
              </div>

          </div>

          <div className="row3">
              <div className="col-12">

              {this.state.saved.length ? (
                    <div>
                      {/* <a href="/saved"> */}
                        {this.state.friends.map((friend, index) => {
                          return (
                            <a href="/friend" key={index}><button className="friendCard" data={friend}>{friend}</button></a>
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