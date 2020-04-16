import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'
import DeckContainer from './containers/DeckContainer'
import Login from './components/Login'
import Profile from './components/Profile'
import Cookies from 'universal-cookie';
import BattleContainer from './containers/BattleContainer'
import { Grid } from 'semantic-ui-react'

const BASEURL = 'http://localhost:3000'

class App extends Component{

  constructor(){
    super();
    this.state = {
      currentUser: '',
      decks: []
    }
  }

  componentDidMount() {
    const cookies = new Cookies();
    if (cookies.get('userToken')) {
      fetch(`${BASEURL}/profile`, {
        headers: {

         Authorization: "Bearer " + cookies.get("userToken")
        }
      })
        .then(resp => resp.json())
        .then(json => this.setState({
          currentUser: json.user, 
          decks: json.decks
        }))
    }
    
  }

  handleSubmit = (submitData, path) => {
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
        if(json.error){
          alert(json.error)
        }
        else{
          this.setState({
            currentUser: json.user,
            decks: json.decks
          })
          //console.log(json)
          const cookies = new Cookies();

          cookies.set('userToken', json.jwt)
        }
        
      }
        
        )
 
      
    
  }


  render(){
    return (
      <Router>
        <Grid className="App">
          <Grid.Row>
            <Grid.Column>
              <NavBar loggedIn={!!this.state.currentUser}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
               <Route exact path="/" component={Home} />
              <Route exact path="/decks"
                render={(props) => <DeckContainer {...props} decks={this.state.decks} user={this.state.currentUser}/>}  />
              <Route exact path="/login" 
              render={(props) => <Login {...props} handleSubmit={this.handleSubmit} />} />
              <Route exact path="/profile"
                render={(props) => <Profile {...props} curentUser={this.state.currentUser} />} />
              <Route exact path="/battle"
              render={(props) => <BattleContainer {...props}  decks={this.state.decks}/>}  />
            </Grid.Column>
          </Grid.Row>
         
        </Grid>
      </Router>
      
    );
  }
    
}

export default App;
