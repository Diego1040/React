import React ,{ useEffect, useState} from "react";


const Lista = (props) => {

    const [pokemon, setPokemons]= useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data)
                setPokemons(data.results)
                
                
                
            }
        )
    }, [])
        return (
            <>

            {pokemon.map((pokemon, key) => {
                return(<div key={key}>{pokemon.name} {pokemon.weigth}</div>)
            })}

            

            
            </>
        )

}

export default Lista