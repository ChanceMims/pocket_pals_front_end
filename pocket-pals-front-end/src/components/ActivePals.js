import React from 'react'
import { Grid } from 'semantic-ui-react'
import PalCard from './PalCard'

const ActivePals = props => (
    <Grid>
        <Grid.Row columns={6}
            id='activate'
            style={{ height: '30vh', width: '100vw', "borderStyle": "groove" }}
               
            onDragEnter={e => {
                if (e.target.id === 'activate') {
                     e.preventDefault();
                    e.target.style.boxShadow = "2px 2px 20px yellow";
                }
               
            }
            }
                
            onDragLeave={e => {
                if (e.target.id === 'activate') {
                    e.preventDefault();
                    e.target.style.boxShadow = "";
                }
            }
            }
                
            onDragOver={e => {
                if (e.target.id === 'activate') {
                    e.preventDefault()
                }
            }
            }
            onDrop={e => {
                if (e.target.id === 'activate') {
                    e.preventDefault();
                    e.target.style.boxShadow = "";
                    props.handleDrop();
                }
            }
            }            


      
            >
                {props.pals.map(pal => (
                    <Grid.Column key={pal.id}>
                        <PalCard
                            draggable
                            handleAttack={props.handleAttack}
                            handleDragEnter={e => {
                                e.preventDefault();
                                e.target.style.boxShadow = "2px 2px 20px red";
                            }}
                            handleDrag={props.handleDrag}
                            pal={pal} />
                    </Grid.Column>
                ))}
            
            
        </Grid.Row>
    </Grid>
)

export default ActivePals