import React from "react";
import logo from "../images/wipro.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="" width="260px" height="50px" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon"></FaAlignRight>
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/flights">Flights</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
