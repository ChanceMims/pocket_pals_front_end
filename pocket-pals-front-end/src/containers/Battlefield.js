import React, {Component} from 'react'

class Battlefield extends Component{

    getBotPals = (props) => {
        const botPals = [{
            name: 'charmander',
            attck: 64,
            def: 58,
            hp: 58,
            img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
            element: 'fire'
        },
        {
            name: 'beedrill',
            attck: 90,
            def: 40,
            hp: 65,
            img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png',
            element: 'bug'
        },
        {
            name: 'jigglypuff',
            attck: 45,
            def: 20,
            hp: 115,
            img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
            element: 'normal'        
        },
        {
                name: 'tentacruel',
                attck: 70,
                def: 65,
                hp: 70,
                img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png',
                element: 'water'
        },
        {
                name: 'onix',
                attck: 45,
                def: 160,
                hp: 35,
                img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
                element: 'rock'
        },
        {
                name: 'tangela',
                attck: 55,
                def: 115,
                hp: 65,
                img_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png',
                element: 'grass'
        }
    ]

    return botPals.slice(0, props.pals.length)
    }

    render(){
        return(

        )
    }
}

export default Battlefield