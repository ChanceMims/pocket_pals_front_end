import React from 'react'
import {Grid} from 'semantic-ui-react'
import PalCard from './PalCard'

const InactivePals = props => (
    <Grid>
        <Grid.Row columns={6} style={{"borderStyle": "groove"}}>
            {props.pals.map(pal => (
                <Grid.Column  key={pal.id}>
                    <PalCard
                        pal={pal}
                        draggable
                        handleDragEnter={() => ''}
                        handleDrag={e => props.handleDrag(pal)}/>
                </Grid.Column>
            ))}
        </Grid.Row>
    </Grid>
)

export default InactivePals