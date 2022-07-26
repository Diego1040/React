import React, { useEffect, useState}  from "react";



const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(res => res.json())
        .then((data) =>{
                console.log(data)
                setPokemon(data)
        })
    }, [])
    
    return(
        <>

    <div className="card-container">
        <div className="img-pokemon">
    
               <img src={pokemon.sprites?.front_default}></img>
               
        </div>
        
        {pokemon.name}

        {pokemon.abilities?.map((pokemon, key) => {
            return ( <div key={key}>{pokemon.ability.name}</div>)
        })}
      
    </div> 
        </>
    )
}


export default Pokemon