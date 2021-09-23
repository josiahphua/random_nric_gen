import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from './Button';

function GetPoke() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(false)
    const wait = "loading..."

    const getPokemon = async () => {
        try {
            const {data} = await axios.get('https://glacial-falls-83397.herokuapp.com/pokemon')
            
            await setPokemon(data)
            
        } catch (e) {
            console.log(e)
        }
    }

    const handleClick = () => {
        getPokemon()
        setLoading(true)

        console.log(pokemon)
    }

    return (
        <div>
            This will be the pokemon display. 
            <Button handleClick={handleClick} />
            <div>
                <ul>
                    {loading
                    ?
                    pokemon.map(el=>{
                        return <li>{el.name}</li>
                    })
                    :
                    wait
                    }   
                    
                </ul>
            </div>
        </div>
    )
}

export default GetPoke
