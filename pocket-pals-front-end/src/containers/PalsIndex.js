import React, {Component} from 'react'
import PocketPal from '../components/PocketPal'
import { Grid } from 'semantic-ui-react';



class PalsIndex extends Component{

    constructor(){
        super();
        this.state = {
            pals: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/pokemon')
        .then(resp => resp.json())
        .then(json => this.setState({pals: json}))
    }

    render(){

        return(
            <Grid>
                <Grid.Row columns={4}>
                    {this.state.pals.map(pal => <PocketPal handleDrag={this.props.handleDrag} key={pal.name} pal={pal}/>)}
                </Grid.Row>
            </Grid>
            
        )

    }
}


export default PalsIndex