import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Deck from './components/Deck'
import Login from './components/Login'
import Profile from './components/Profile'
import Cookies from 'universal-cookie';

const BASEURL = 'http://localhost:3000'

class App extends Component{

  constructor(){
    super();
    this.state = {
      currentUser: ''
    }
  }

  componentDidMount(){
    const cookies = new Cookies();
    console.log(cookies.get('userToken'))
    if(cookies.get('userToken')){console.log('userToken')}
    
  }

  handleSubmit = (submitData, path) => {
    console.log(submitData)
    fetch(`${BASEURL}/${path}`,{
      method: 'POST',
      headers: {
        Accepted: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: submitData})
    })
      .then(resp => resp.json())
      .then(json => {
        if(json.errors){
          
        }
        else{
          this.setState({
            currentUser: json.user,
            
          })
          const cookies = new Cookies();

          cookies.set('userToken', json.jwt)
          console.log(cookies.get('userToken'))
        }
        
      }
        
        )
 
      
    
  }


  render(){
    return (
      <Router>
        <div className="App">
          <NavBar loggedIn={!!this.state.currentUser}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/decks" component={Deck} />
          <Route exact path="/login" 
           render={(props) => <Login {...props} handleSubmit={this.handleSubmit} />} />
          <Route exact path="/profile"
            render={(props) => <Profile {...props} curentUser={this.state.currentUser} />} />
        </div>
      </Router>
      
    );
  }
    
}

export default App;
