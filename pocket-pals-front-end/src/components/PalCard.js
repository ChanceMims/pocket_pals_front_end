import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const PalCard = props => (
        <Card>
            <header>{props.pal.name}</header>
        <Image src={props.pal.img_url} />
    </Card>
    
)

export default PalCard