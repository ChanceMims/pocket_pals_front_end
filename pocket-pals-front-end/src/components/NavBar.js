import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  // margin: "0 6px 6px",
  borderStyle: 'solid',
  background: "red",
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
          Home
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
          to="/battle"
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
          }
        }
        >Do Battle
        </NavLink>

        {
          this.props.loggedIn ? 
            <NavLink
          to='/profile'
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
          }}
        >
              Profile
        </NavLink>
            :
         <NavLink
          to='/login'
          exact
          style={link}
          activeStyle={{
            background: "darkblue"
          }}
        >
          Log In
        </NavLink>
        }

        
       
      </div>
    );
  }
}

export default NavBar;
