import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
          }}
        >
          <img src="https://img.icons8.com/plasticine/100/000000/pokeball.png"></img>
        </NavLink>
        <NavLink
          to="/decks"
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
          }}
        >
          Decks
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
          }}
        >
          Login
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
