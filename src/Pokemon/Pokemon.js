import React, { useEffect, useState}  from "react";


const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(res => res.json())
        .then((data) =>{
            console.log(data);
            setPokemon(data.results)
        })
    })


    
    return(
        <>

        
        </>
    )
}

export default Pokemon