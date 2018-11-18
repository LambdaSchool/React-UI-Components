// import React, { Component } from 'react';
import React from 'react';
import './Footer.css';

const Footer = (props) => {
//   state = {
//     comment: "",
//     retweet: 6,
//     like: 4,
//     email: "",
//   }

  // class Footer extends Component {
  //   state = {
  //     comment: "",
  //     retweet: 6,
  //     like: 4,
  //     email: "",
  //   }
  

  // handleClickEvent = event => {
  //   prompt("Add comment...");
  //   this.setState({
  //     comment: event.target.value
  //   })
  // }

  return (
    <div className="footerContainer">
      {/* <i className="far fa-comment" onClick={handleClickEvent()} value={this.state.comment} ></i> */}
      <i className="far fa-comment"></i>
      <i className="fas fa-sync"></i>
      <p>6</p>
      <i className="far fa-heart"></i>
      <p>4</p>
      <i className="far fa-envelope"></i>
    </div>
  )
}

  // render() {
  //  return (
  //     <div className="footerContainer">
  //       <i className="far fa-comment" onClick={handleClickEvent()} value={this.state.comment} ></i>
  //       <i className="fas fa-sync"></i>
  //       <p>6</p>
  //       <i className="far fa-heart"></i>
  //       <p>4</p>
  //       <i className="far fa-envelope"></i>
  //     </div>
  //   )


  // }
// }
export default Footer;