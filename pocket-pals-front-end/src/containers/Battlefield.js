import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import ActionLog from '../components/ActionLog'
import InactivePals from '../components/InactivePals'
import ActivePals from '../components/ActivePals'
 
class Battlefield extends Component{

    constructor(){
        super();
        this.state={
            messages: [],
            myPals: [],
            turn: 'player',
            selectedPal: ''
        }
    }

    componentDidMount(){
        this.assignPalsStatus()
    }


    getBotPals = (size) => {
        const botPals = [{
            name: 'charmander',
            attck: 64,
            def: 58,
            hp: 58,
            img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
            element: 'fire',
            status: 'inactive'
        },
        {
            name: 'beedrill',
            attck: 90,
            def: 40,
            hp: 65,
            img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
            element: 'bug',
            status: 'inactive'
        },
        {
            name: 'jigglypuff',
            attck: 45,
            def: 20,
            hp: 115,
            img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
            element: 'normal',
            status: 'inactive'

        },
        {
                name: 'tentacruel',
                attck: 70,
                def: 65,
                hp: 70,
                img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
                element: 'water',
                status: 'inactive'
        },
        {
                name: 'onix',
                attck: 45,
                def: 160,
                hp: 35,
                img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
                element: 'rock',
                status: 'inactive'
        },
        {
                name: 'tangela',
                attck: 55,
                def: 115,
                hp: 65,
                img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
                element: 'grass',
                status: 'inactive'
        }
    ]

    return botPals.slice(0, size)
    }

    assignPalsStatus = () => {
        //console.log(this.props)
        const palArray = [];
        this.props.pals.map(pal => {
            pal.status = 'inactive'
            palArray.push(pal)
            console.log(pal)
            
        })
        this.setState({
            myPals: palArray
        })
    }

    handleDrag = (pal) => {
        this.setState({
            selectedPal: pal
        })
    }

    handleActivate = () => {

        const inactivePals = this.state.myPals.filter(pal => (
            pal.name !== this.state.selectedPal.name
        ))
        this.state.selectedPal.status = 'active';
        console.log(inactivePals)
        this.setState({
            myPals: [...inactivePals, this.state.selectedPal],
            messages: [...this.state.messages, `${this.state.selectedPal.name} has been activated`]
        })

    }

    render(){
        return(
            <Grid>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <ActionLog messages={this.state.messages} />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <InactivePals handleInactiveDrag={props => console.log(props)} pals={this.getBotPals(this.props.pals.length).filter(pal => (pal.status === 'inactive' ))}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column centered >
        
                            <ActivePals pals={this.getBotPals(this.props.pals.length).filter(pal => (pal.status === 'active'))}/>
                        
                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column centered>
                        <ActivePals handleActivate={this.handleActivate} handleDrag={this.handleDrag} pals={this.state.myPals.filter(pal => (pal.status === 'active' ))}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column centered>
                        <InactivePals handleDrag={this.handleDrag} pals={this.state.myPals.filter(pal => (pal.status === 'inactive'))}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Battlefield