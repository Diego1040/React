import React ,{ useEffect, useState} from "react";


const Combate = (props) =>{

    const [combate, setHistorial] = useState([])

    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data)
                setHistorial(data.results)
                
            })
    }, [])


    return(
        <>

        {combate.map((pokemon, key) =>{
            return(<div key={key}>{pokemon.url}</div>)
        })}
        
        </>
    )
}


export default Combate