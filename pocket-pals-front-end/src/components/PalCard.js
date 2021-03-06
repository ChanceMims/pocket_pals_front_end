import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'

const PalCard = props => (

    <div
        draggable
        onDragStart={() => props.handleDrag(props.pal)}
        onDrop={(e) => {
             e.preventDefault();
            e.target.style.boxShadow = "";
            props.handleAttack(props.pal)
        }}
        onDragEnter={e => props.handleDragEnter(e)}
        onDragLeave={e => {
            e.preventDefault();
            e.target.style.boxShadow = "";
            }
        } 
                
        onDragOver={event => {
            event.preventDefault()
        }}
    >
        <Card >
            <header>{props.pal.name}</header>
                <Image src={props.pal.img_url} />
                <Card.Content>
                    <Icon name='heart'/> {props.pal.hp}
                    Defense: {props.pal.defense} 
                    Attack: {props.pal.attack}
                </Card.Content>
        </Card>
    </div>
   
    
)

export default PalCard