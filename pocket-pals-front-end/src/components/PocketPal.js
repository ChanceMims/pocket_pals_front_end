import React from 'react'
import {Card, Image} from 'semantic-ui-react'
//import Draggable from 'react-draggable'

const PocketPal = (props) => (

        <div
            draggable
            onDragStart={e => props.handleDrag(props.pal)}
        >
            <Card>
            <Card.Header>{props.pal.name}</Card.Header>
                <Image src={props.pal.img_url}/>

                
            
            </Card>
        </div>
        

   
    


)

export default PocketPal