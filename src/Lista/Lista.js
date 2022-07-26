import React ,{ useEffect, useState} from "react";

import "./Lista.css"


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

            {/** Aca solo me deja mostrar resultados de name y tambien de las url pero no puedo acceder mas alla de los results */}

            <div className="card-container">

                <div className="card-pokemon">
                 {pokemon.map((pokemon, key) => {
                 return(<div key={key}>{pokemon.name}</div>)
                })}
                </div>

                <div className="img-pokemon">
                 {pokemon.map((pokemon, key) => {
                 return(<div key={key}>{pokemon.sprites /**.front_default */}</div>)
                 })}
                </div>

                <div className="card-weigth">
                 {pokemon.map((pokemon, key) => {
                 return(<div key={key}>{pokemon.weigth}</div>)
                })}
                </div>

                <div className="card-ability">
                {pokemon.map((pokemon, key) =>{
                    return(<div key={key}>{pokemon.ability}</div>)
                })}
                </div>

            </div> 
            
            </>
        )

}

export default Lista