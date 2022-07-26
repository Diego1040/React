import React, { useEffect, useState}  from "react";



const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState({})
    

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/abra")
        .then(res => res.json())
        .then((data) =>{
                console.log(data)
                setPokemon(data)
        })
    }, [])

    return(
        <>

    <div className="card-container">

        <div className="name-pokemon">
         {pokemon.name}
        </div>

        <div className="img-pokemon">
    
        <img src={pokemon.sprites?.front_default}></img>  <img src={pokemon.sprites?.back_default}></img>
        
        <label for="shiny">
        <input id="shiny" type="radio" name="shiny-woman"></input>shiny</label>
        <label for="woman">
        <input type="radio" id="woman" name="shiny-woman"></input>woman</label>
               
        </div>

        <div className="card-weigth">
            {pokemon.weight}
        </div>


        <div className="card-ability">

        {pokemon.abilities?.map((pokemon, key) => {
           return (<div key={key}>{pokemon.ability.name}</div>)
        })}

        </div>

        <div className="card-experience">
            {pokemon.base_experience}
        </div>

        <br/>

        Lista de movimientos:
        
        <div className="card-forms">
        {pokemon.moves?.map((pokemon, key) => {
            return(<div key={key}>{pokemon.move.name}</div>)
            })}
        </div>
        
      
    </div> 
        </>
    )
}


export default Pokemon