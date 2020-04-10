import React from 'react'
import {List, ListItem} from 'semantic-ui-react'

const ActionLog = props => (
    <div
    style={{backgroundColor: 'white',
            fontFamily: 'Press Start 2P'
            }}>
        <List>
        {props.messages.map(message => (
        <ListItem> {message} </ListItem> 
    ))}
    </List>
    </div>
    
    
)

export default ActionLog