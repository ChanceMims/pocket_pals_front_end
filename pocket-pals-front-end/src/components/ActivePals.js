import React from 'react'
import { Grid } from 'semantic-ui-react'
import PalCard from './PalCard'

const ActivePals = props => (
    <Grid>
        <Grid.Row columns={6}
            
            style={{height: '30vh', width: '100vw', "borderStyle": "groove"}}
                onDragEnter={e => {
                    e.preventDefault();
                    e.target.style.boxShadow = "2px 2px 20px yellow";
                }
                }
                onDragLeave={e => {
                    e.preventDefault();
                    e.target.style.boxShadow = "";
            }
            } 
                
                onDragOver={event => {
                    event.preventDefault()
                }}
                
                
                onDrop={e => {
                    e.preventDefault();
                    e.target.style.boxShadow = "";
                    props.handleDrop();
                }
                }    
            // onDrop={e => props.handleActivate()} 
            >
                {props.pals.map(pal => (
                    <Grid.Column key={pal.id}>
                        {/* <div >            */}
                            {/* draggable */}
                            {/* onDragStart={e => props.handleDrag(pal)}> */}
                            <PalCard
                                draggable
                                handleDrag={props.handleDrag}
                                pal={pal} />
                        {/* </div>  */}
                    </Grid.Column>
                ))}
            
            
        </Grid.Row>
    </Grid>
)

export default ActivePals