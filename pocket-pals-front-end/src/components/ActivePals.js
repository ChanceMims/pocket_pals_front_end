import React from 'react'
import { Grid } from 'semantic-ui-react'
import PalCard from './PalCard'

const ActivePals = props => (
    <Grid>
        <Grid.Row columns={6}>
            <div
            style={{height: '30vh', width: '100vw', "borderStyle": "groove"}}
                onDragEnter={e => {
                    e.target.style.boxShadow = "2px 2px 20px yellow";
                }
                }
                onDragLeave={e => {
                e.target.style.boxShadow = "";
            }
            } 
              onDrop={() => console.log('drop')}    
            // onDrop={e => props.handleActivate()} 
            >
                {props.pals.map(pal => (
                    <Grid.Column>
                        <div            
                            draggable
                            onDragStart={e => props.handleDrag(pal)}>
                                <PalCard  pal={pal} key={pal.id}/>
                        </div> 
                    </Grid.Column>
                ))}
            </div>
            
        </Grid.Row>
    </Grid>
)

export default ActivePals