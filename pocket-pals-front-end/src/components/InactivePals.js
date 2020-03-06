import React from 'react'
import {Grid} from 'semantic-ui-react'
import PalCard from './PalCard'

const InactivePals = props => (
    <Grid>
        <Grid.Row columns={6}>
            {props.pals.map(pal => (
                <Grid.Column>
                    <div 
                    draggable
                    onDragStart={e => props.handleDrag(pal)}
                    >
                        <PalCard  pal={pal}/>
                    </div>
                    
                </Grid.Column>
            ))}
        </Grid.Row>
    </Grid>
)

export default InactivePals