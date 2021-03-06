import React ,{ useEffect, useState} from "react";


const Lista = (props) => {

    const [pokemon, setPokemons]= useState([])
    const [titulo, setTitulo] = useState("bfjbfjabf")


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

            {titulo}

            {pokemon.map((pokemon, key) => {
                return(<div key={key}>{pokemon.name}</div>)
            })}
            </>
        )

}

export default Lista