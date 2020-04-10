import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react';
import PalCard from '../components/PalCard';



class PalsIndex extends Component{

    constructor(){
        super();
        this.state = {
            pals: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/pocket_pals')
        .then(resp => resp.json())
            .then(json => {
                this.setState({ pals: json });
         })
    }

    render(){

        return(
            <Grid>
                <Grid.Row columns={4}>
                    {this.state.pals.map(pal => <PalCard handleDrag={this.props.handleDrag} key={pal.name} pal={pal}/>)}
                </Grid.Row>
            </Grid>
            
        )

    }
}


export default PalsIndex