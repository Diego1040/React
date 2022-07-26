import React ,{ useEffect, useState} from "react";


const Combate = (props) =>{

    const [pokemon1, setCombate1] = useState([])

    

    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data)
                setCombate1(data.results)
                
            })
    }, [])


    return(
        <>

        {pokemon1.map((pokemon1, key) =>{
            return(<div key={key}>{pokemon1.url}</div>)
        })}
        
        </>
    )
}


export default Combate