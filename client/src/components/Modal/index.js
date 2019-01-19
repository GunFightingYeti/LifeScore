import React, { Component } from "react";
import API from "../../utils/API";

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
      results: [],
      id: "5c3feac478de385b24ada735"
    };
  }

  getOne = id => e => {
    console.log(id);
    API.getOneChieve(id)
    .then(res => {
      this.setState({results: res.data})

      // console.log(res);
      // .catch(err => console.log(err))
    });
  }
  
  componentDidMount() {
     this.getOne(this.state.id);
  }

  render () {
    return (

  // BFG modal

  //   <div className="modal-dialog" role="document">
  //       <div className="modal-content">
  //           <div className="modal-header">
  //           <h3>{props.title}</h3>
  //           </div>
  //           <div className="modal-body">
  //             {props.children}
  //           </div>
  //       </div>
  //   </div>


// Bootstrap modal

//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>





        <div className="modal" role="dialog" style={{ display: this.props.display }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="pageTitle">
                  <h1 className="modal-title"><i className="fas fa-upload"></i>  Complete</h1>
              </div>

              <div className="row3">

                <div className="pb-3 modal-body">
                  <h1>Upload proof that you passed "{this.state.results.name}"</h1>
                  <button className="achievement">{this.state.results.name} - {this.state.results.description} = {this.state.results.worth} S</button>
                  <input type="file"></input>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>

              </div>

          </div>
        </div>
      </div>
    );  
  }
}

export default Modal;