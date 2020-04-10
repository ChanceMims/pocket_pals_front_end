import React, {Component, Fragment} from 'react'
import Deck from '../components/Deck'
import { Button, Grid, Confirm } from 'semantic-ui-react'
import Cookies from 'universal-cookie';
import PalCard from '../components/PalCard'
//import MyDeck from '../components/MyDeck'
import Battlefield from './Battlefield';

class BattleContainer extends Component{

    constructor(){
        super();
        this.state={
            currentDeck: '',
            confirmed: false,
            myPals: [],
            open: false
        }
    }

    handleClick = deck =>{
        const cookie = new Cookies();
        const authToken = cookie.get('userToken');
        console.log(cookie.get('userToken'))
        //console.log(deck)
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
        )}

        open = () => this.setState({ open: true })
        close = () => this.setState({ open: false })

   handleConfirm = () => {
       this.setState({
           open: false,
           confirmed: true
       })
       console.log(this.state.confirmed)
   }


    render(){
        return(
            <div style={{  
                backgroundImage: "url(https://www.ssbwiki.com/images/thumb/7/73/SSBU-Pok%C3%A9mon_Stadium_2.png/1200px-SSBU-Pok%C3%A9mon_Stadium_2.png)",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100vw'
              }}>

<Grid>
                {
                    this.state.confirmed ?
                    
                    <Battlefield pals={this.state.myPals} />

                    :
                    <Fragment>

<Grid.Column width={4}>
                    {this.props.decks.map(deck => <Deck handleClick={this.handleClick} key={deck.name} deck={deck}/>)}
                    {!!this.state.currentDeck ? <div>

                        <Button onClick={this.open}> Select Deck </Button> 
                        <Confirm
                        open={this.state.open}
                        onCancel={this.close}
                         onConfirm={this.handleConfirm} />

                    </div>
                    : ''}
               </Grid.Column>
               <Grid.Column width={12}>
                    {!!this.state.currentDeck && <div>
                        {this.state.myPals.map(pal => (
                                <PalCard pal={pal}></PalCard>
                            ))}
                    </div>}

               </Grid.Column>

                    </Fragment>
                }
               
            </Grid>


              </div>
            
        )
    }
}

export default BattleContainer