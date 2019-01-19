import React, { Component } from "react";
import Modal from "../Modal";
import API from "../../utils/API";

class Browse extends Component {

  state = {
    results: [],
    category: "",
    menuVisible: true,
    display: "none",
    title: "Title",
  }

  showMenu = () => {
    this.setState({ menuVisible: true });
  };

  openModal = () => {
    this.setState({ display: "block" });
  }

  closeModal = () => {
    this.setState({ display: "none" });
  }

  getAll = category => e => {
    API.getAllChieves(category)
    .then(res => {
      // console.log(res);
      this.setState({results: res.data, category: category, menuVisible: false})
      // .catch(err => console.log(err))
    });
  }

  getOneCategory = category => e => {
    API.getOneCategory(category)
    .then(res => {
      // console.log(res);
      this.setState({results: res.data, category: category, menuVisible: false})
      // .catch(err => console.log(err))
    });
  }

  getSaved = saved => e => {
    API.getSaved()
    .then(res => {
      // console.log(res);
      this.setState({results: res.data, category: saved, menuVisible: false})
      // .catch(err => console.log(err))
    });
  }

  saveChieve = id => e => {
    API.saveChieve(id)
    .then(res => {
      // console.log(res);
      // .catch(err => console.log(err))
    });
  }

  unsaveChieve= id => e => {
    API.unsaveChieve(id)
    .then(res => {
      // console.log(res);
      // .catch(err => console.log(err))
    });
  }

  passChieve= id => e => {
    API.passChieve(id)
    .then(res => {
      // console.log(res);
      // .catch(err => console.log(err))
    });
  }

render() {
    return (
    <div className="container">
        <div className="row">

        {this.state.menuVisible ? (
          <div className="pageTitle">
            <h1><i className="fas fa-journal-whills"></i> Browse</h1>
          </div>
        ) : (
          <div className="pageTitle">
            {/* <button className="titlebtn"> */}
            <button className="titlebtn" onClick={this.showMenu.bind(this)}>
              <h1><i className="fas fa-bars"></i> New Search</h1>
            </button>
          </div>
        )}
        </div>

        {this.state.menuVisible ? (
          <div className="row3">
            <div className="col-12">

                <button className="homebtn" onClick={this.getAll("All")}>All</button>
                <button className="homebtn" onClick={this.getOneCategory("Life")}>Life</button>
                <button className="homebtn" onClick={this.getOneCategory("Food")}>Food</button>
                <button className="homebtn" onClick={this.getOneCategory("Social")}>Social</button>
                <button className="homebtn" onClick={this.getOneCategory("Adventure")}>Adventure</button>
                <button className="homebtn" onClick={this.getOneCategory("Skills")}>Skills</button>
                <button className="homebtn" onClick={this.getOneCategory("Fun")}>Fun</button>
                <button className="homebtn" onClick={this.getOneCategory("Violent")}>Violent</button>
                <button className="homebtn" onClick={this.getSaved("Saved")}>Saved</button>

            </div>
        </div>
        ) : (
         null
        )}

        <div className="row3">
            <div className="col-12 results p-3">

            <h1>{this.state.category}</h1>

            {this.state.results.length ? (
              <div>
                  {this.state.results.map((chieves, index) => {
                    return (
                      <div key={index}>

                      {/* Save button */}
                      {(this.state.category === "Saved")
                       ? <button className="savebtn float-left" onClick={this.unsaveChieve(chieves._id)} data-id={chieves._id}>Delete</button> 
                       : <button className="savebtn float-left" onClick={this.saveChieve(chieves._id)} data-id={chieves._id}>Save</button> 
                      }

                      {/* <button className="savebtn float-left" onClick={this.openCard(chieves._id)} data-id={chieves._id}>View</button>  */}
                      <button className="savebtn float-left" onClick={this.openModal.bind(this)} data-id={chieves._id}>View</button> 
                      <button className="savebtn float-left" onClick={this.passChieve(chieves._id)} data-id={chieves._id}>Complete</button> 
                      
                      {/* Full achievement */}
                      <button className="achievement">{chieves.name} - {chieves.description} = {chieves.worth} S</button>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <h2>Choose a category to search</h2>
            )}

          </div>

          {(this.state.display === "None")
            ? <Modal display={this.state.display} title={this.state.title}></Modal>
            : <Modal display={this.state.display} title={this.state.title}></Modal>
          }
          
      </div>
    </div>
    );  
}
}

export default Browse;