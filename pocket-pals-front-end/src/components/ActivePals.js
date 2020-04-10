import React from 'react'
import { Grid } from 'semantic-ui-react'
import PalCard from './PalCard'

const ActivePals = props => (
    <Grid>
        <Grid.Row columns={6}>
            <div
            style={{height: '30vh', width: '100vw'}}
            onDragOver={e => {
                e.stopPropagation();
                e.preventDefault();
                console.log('drop here')
            } 
                }    
            onDrop={e => props.handleActivate()} 
            >
                {props.pals.map(pal => (
                    <Grid.Column>
                        <div            
                            draggable
                            onDragStart={e => props.handleDrag(pal)}>
                                <PalCard  pal={pal}/>
                        </div> 
                    </Grid.Column>
                ))}
            </div>
            
        </Grid.Row>
    </Grid>
)

export default ActivePals