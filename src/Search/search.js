import React ,{ useEffect, useState} from "react";
import { Link } from "react-router-dom";



const Search = (props) => {


    const [search, setSearch] = useState()

    const onClick = (event) =>{
        <Link to="/pokemon"></Link>
        
    }

    return(
        <>
        
        <div> Buscar Pokemon: <input placeholder="Buscar Pokemon"></input> </div>
        <button onClick={onClick}>Enviar</button>

        
        </>
    )
}


export default Search
