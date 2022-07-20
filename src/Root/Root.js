import { Link , Outlet} from "react-router-dom";
import "./Root.css"

const Root = (props) => {
    return (
        <>

        <nav>

         <a><Link to="/pokemon">Pokemon</Link></a>
         <a><Link to="/lista">Lista</Link></a>
         <a><Link to="/historial">Historial</Link></a>
         <a><Link to="/combate">Combate</Link></a>
         <span> Buscar Pokemon:<input type="search"></input> </span>


        <Outlet/>

        </nav>
        
        </>
    )
}

export default Root