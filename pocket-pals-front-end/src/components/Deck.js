import React from 'react'
import {Card, Image} from 'semantic-ui-react'

const Deck = (props) => (
    <Card onClick={e => props.handleClick(props.deck)}>
        <Image src={'pocketCard.png'} />
    </Card>
)

export default Deck