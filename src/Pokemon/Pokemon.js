import React, { useEffect, useState}  from "react";


const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res => res.json())
        .then((data) =>{
                console.log(data)
                setPokemon(data.results)
        })
    }, [])
    
    return(
        <>
        


        {/*{pokemon.map((pokemon, key) => {
                return(<div key={key}>{pokemon.name}</div>)
            })}  */} 
        
        </>
    )
}


export default Pokemon