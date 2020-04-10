import React, {Component} from 'react';
import PalsIndex from './PalsIndex'
import {Grid, Image} from 'semantic-ui-react'
import Deck from '../components/Deck'
import MyDeck from '../components/MyDeck'
import Cookies from 'universal-cookie';
 
class DeckContainer extends Component{

     

     constructor(props){
          super(props)
          this.state={
               currentDeck: '',
               selected: '',
               myPals: []
          }
     }

     handleClick = deck =>{
          const cookie = new Cookies();
          const authToken = cookie.get('userToken');
          fetch(`http://localhost:3000/decks/${deck.id}`, {
               method: 'GET',
               headers: {
                    'Authorization': 'Bearer ' + authToken
                  }          })
          .then(resp => resp.json())
          .then(json => {
               if(json.message){
                    alert(json.message)
          }
          else{
               console.log(json)
               this.setState({
                    currentDeck: json,
                    myPals: json.pocket_pals
               })
               console.log(this.state.myPals)
          }
             
     }
          )

}

     handleDrag = pal => {
          // console.log(pal)
         // console.log(this.state.myPals)
          this.setState({
               selected: pal
          })
     }

     handleDrop = () => {
          //console.log(this.state.currentDeck)
          
          this.setState({
               myPals: [...this.state.myPals, this.state.selected]
          })
          
          console.log(this.state.myPals)
     }

     handleSaveDeck = () => {
          const cookies = new Cookies();
          const authToken = cookies.get('userToken');

          const data = {
               deck: this.state.currentDeck,
               pocket_pals: [...this.state.myPals]
          }

          console.log(data)

          fetch(`http://localhost:3000/decks/${this.state.currentDeck.id}`, {
               method: 'PATCH',
               headers: {
                    'Accepted': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + authToken
               },
               body: JSON.stringify(data)
          })
          .then(resp => resp.json())
          .then(json => console.log(json))
     }

     render(){
          return(
               <Grid>
               <Grid.Column width={4}>
                    {this.props.decks.map(deck => <Deck handleClick={this.handleClick} key={deck.name} deck={deck}/>)}
                         {!!this.state.currentDeck ? <button onClick={e => this.handleSaveDeck()}> Save Deck </button> : ''}
                         <Image src={'pocketCard.png'} onClick={() => this.handleClick()}/>
               </Grid.Column>
               <Grid.Column width={12}>
                    {!!this.state.currentDeck && <Grid.Row>
                         <MyDeck handleDrop={this.handleDrop} pals={this.state.myPals} />
                    </Grid.Row>}
                    
                    <Grid.Row>
                         <PalsIndex handleDrag={this.handleDrag}></PalsIndex>
                    </Grid.Row>
               </Grid.Column>
          </Grid>
          )
     }

   // { make the pokit pals the right size height:300px, width:pc300}

}
     

 
export default DeckContainer;