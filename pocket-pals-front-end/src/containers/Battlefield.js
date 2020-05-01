import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import ActionLog from '../components/ActionLog'
import InactivePals from '../components/InactivePals'
import ActivePals from '../components/ActivePals'

 
class Battlefield extends Component{

    constructor(props){
        super(props);
        this.state={
            messages: [],
            myPals: [...props.pals],
            turn: 'player',
            selectedPal: '',
            botPals: [],
            win: false
        }
    }

    componentDidMount() {
        this.getBotPals(this.state.myPals.length);
        this.assignPalsStatus();
    }

    getBotPals = (size) => {
        fetch("http://localhost:3000/pocket_pals")
            .then(resp => resp.json())
            .then(json => {
                this.sample(json, size)
            })
    }

    sample = (pals, size) => {
        const palsArray = [];

        for (let counter = 0; counter < size; counter++){
            const statPal = pals[Math.floor(100 * Math.random(0, pals.size))]
            statPal.status = "inactive";
            palsArray.push(statPal)
        }
        this.setState({
                    botPals: palsArray
        })
    }

    assignPalsStatus = () => {
        this.state.myPals.map(pal => {
            pal.status = 'inactive'
        })     
    }

    handleDrag = (pal) => {
        this.setState({
            selectedPal: pal
        })
    }

    handleActivate = () => {

        this.state.selectedPal.status = 'active';
        console.log('activate')
        this.setState({
            messages: [...this.state.messages, `${this.state.selectedPal.name} has been activated`]
        })

    }

    handleAttack = (target) => {
        const attacker = this.state.selectedPal;
        const calculatedDamage = this.calcDamage(attacker, target);
        target.hp = target.hp - calculatedDamage > 0 ? target.hp - calculatedDamage : 0 
        // const updatedPal = Object.assign({}, target, { hp: target.hp - calculatedDamage > 0 ? target.hp - calculatedDamage : 0 })
        if (target.hp === 0) {
            // debugger
            target.status = 'dead';
            const newMessage = `${target.name} is dead`;
            this.setState({
                messages: [...this.state.messages, newMessage]
            })
        }
        // console.log(updatedPal)
        // this.setState({
        //     botPals: [...this.state.botPals.filter(pal => pal.id != target.id), updatedPal]
        // })
        this.checkWin();
        const newMessage = `${this.state.selectedPal.name} has attacked ${target.name} for ${calculatedDamage} damage`
           this.setState({
            messages: [...this.state.messages, newMessage]
        })
    }

    calcDamage(attacker, target){
        const damage = attacker.attack - target.defense;
        return damage > 1 ? damage : 0;
    }

    checkWin= () => {
        if (this.state.botPals.find(pal => pal.status !== 'dead')) {

        }
        else {
            this.setState({win: true})
        }
    }

   

    render(){
        return !this.state.win ? (
            
            <Grid>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <ActionLog messages={this.state.messages} />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <InactivePals id='enemy-inactive' handleDrag={this.handleDrag} pals={this.state.botPals.filter(pal => (pal.status === 'inactive' ))}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column  >
                            <ActivePals id='enemy-active' handleAttack={this.handleAttack} pals={this.state.botPals.filter(pal => (pal.status === 'active'))}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column >
                        <ActivePals
                            handleAttack={this.handleAttack}
                            handleDrop={this.handleActivate}
                            handleDrag={this.handleDrag}
                            pals={this.state.myPals.filter(pal => (pal.status === 'active'))} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column >
                        <InactivePals id='user-inactive' handleDrag={this.handleDrag} pals={this.state.myPals.filter(pal => (pal.status === 'inactive'))}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
            
            :

            <div>
                <h1 style={{color: 'red'}}>congratulation! win!</h1>
            </div>
    }
}

export default Battlefield