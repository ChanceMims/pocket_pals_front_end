import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Deck from './components/Deck'
import Login from './components/Login'

class App extends Component{

  constructor(){
    super();
    this.state = {
    }
  }


  render(){
    return (
      <Router>
        <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home} />
      <Route exact path="/decks" component={Deck} />
      <Route exact path="/login" component={Login} />
      </div>
      </Router>
      
    );
  }
    
}

export default App;
