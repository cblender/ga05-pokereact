import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.state = { show: false };
    // console.log(this.state)
  }

  handleNavbar = () => {
    console.log("FIRED! handleNavbar for Navbar");
    if (this.state.show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };

  render = () => {
    let show = this.state.show;
    let navbar;
    if (show) {
      navbar = (
        <div className="navFlex">
          <h1 style={{ color: "white" }}>NAVBAR</h1>
        </div>
      );
    }
    return (
      <div className="navBox">
        <div>
          <div className="navButtonBox" onClick={this.handleNavbar}></div>
        </div>
        <div>{navbar}</div>
      </div>
    );
  };
}

export default Navbar;
