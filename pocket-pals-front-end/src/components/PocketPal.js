import React from 'react'
import {Card, Image} from 'semantic-ui-react'
//import Draggable from 'react-draggable'

const PocketPal = (props) => (

        <div
            draggable
            onDragStart={e => props.handleDrag(props.pal)}
        >
            <Card>
                <Image src={props.pal.sprites.front}/>
                <Card.Header>{props.pal.name}</Card.Header>
            
            </Card>
        </div>
        

   
    


)

export default PocketPal