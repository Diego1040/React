import { Link , Outlet} from "react-router-dom";
import "./Root.css"

const Root = (props) => {
    return (
        <>

        <nav>

         <Link to="/pokemon">Pokemon</Link>
         <Link to="/lista">Lista</Link>
         <Link to="/historial">Historial</Link>
         <Link to="/combate">Combate</Link>
         <span> Buscar Pokemon:<input type="search"></input> </span>


        <Outlet/>

        </nav>
        
        </>
    )
}

export default Root