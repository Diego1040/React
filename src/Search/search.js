import React ,{ useEffect, useState} from "react";



const Search = (props) => {


    const [search, setSearch] = useState()

    const onClick = (event) =>{
        console.log()
        
    }

    return(
        <>
        
        <div> Buscar Pokemon: <input placeholder="Buscar Pokemon"></input> </div>
        <button onClick={onClick}>Enviar</button>

        
        </>
    )
}


export default Search
